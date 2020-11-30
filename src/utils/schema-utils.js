/* Generates an schema object containing type and constraint info */
export function getTypeInfo(schema) {
  if (!schema) {
    return;
  }
  const info = {
    type: schema.$ref
      ? '{recursive}'
      : schema.enum
        ? 'enum'
        : schema.format
          ? schema.format
          : schema.type
            ? schema.type
            : '{missing-type-info}',
    format: schema.format ? schema.format : '',
    pattern: (schema.pattern && !schema.enum) ? schema.pattern : '',
    readOrWriteOnly: schema.readOnly
      ? '🆁'
      : schema.writeOnly
        ? '🆆'
        : '',
    deprecated: schema.deprecated ? '❌' : '',
    example: typeof schema.example === 'undefined'
      ? ''
      : Array.isArray(schema.example)
        ? schema.example
        : `${schema.example}`,
    default: typeof schema.default === 'undefined' ? '' : `${schema.default}`,
    description: schema.description ? schema.description : '',
    constrain: '',
    allowedValues: '',
    arrayType: '',
    html: '',
  };
  if (info.type === '{recursive}') {
    info.description = schema.$ref.substring(schema.$ref.lastIndexOf('/') + 1);
  } else if (info.type === '{missing-type-info}') {
    info.description = info.description || '';
  }

  // Set Allowed Values
  if (schema.enum) {
    let opt = '';
    schema.enum.map((v) => {
      opt += `${v}, `;
    });
    info.allowedValues = opt.slice(0, -2);
  }

  if (schema.type === 'array' && schema.items) {
    const arraySchema = schema.items;
    info.arrayType = `${schema.type} of ${arraySchema.type}`;
    info.default = arraySchema.default === 0 ? '0 ' : (arraySchema.default ? arraySchema.default : '');
    if (arraySchema.enum) {
      let opt = '';
      arraySchema.enum.map((v) => {
        opt += `${v}, `;
      });
      info.allowedValues = opt.slice(0, -2);
    }
  } else if (schema.type === 'integer' || schema.type === 'number') {
    if (schema.minimum !== undefined && schema.maximum !== undefined) {
      info.constrain = `${schema.exclusiveMinimum ? '>' : '>='}${schema.minimum} and ${schema.exclusiveMaximum ? '<' : '<='} ${schema.maximum}`;
    } else if (schema.minimum !== undefined && schema.maximum === undefined) {
      info.constrain = `${schema.exclusiveMinimum ? '>' : '>='}${schema.minimum}`;
    } else if (schema.minimum === undefined && schema.maximum !== undefined) {
      info.constrain = `${schema.exclusiveMaximum ? '<' : '<='}${schema.maximum}`;
    }
    if (schema.multipleOf !== undefined) {
      info.constrain = `(multiple of ${schema.multipleOf})`;
    }
  } else if (schema.type === 'string') {
    if (schema.minLength !== undefined && schema.maxLength !== undefined) {
      info.constrain = `(${schema.minLength} to ${schema.maxLength} chars)`;
    } else if (schema.minLength !== undefined && schema.maxLength === undefined) {
      info.constrain = `min ${schema.minLength} chars`;
    } else if (schema.minLength === undefined && schema.maxLength !== undefined) {
      info.constrain = `max ${schema.maxLength} chars`;
    }
  }
  info.html = `${info.type}~|~${info.readOrWriteOnly} ${info.deprecated}~|~${info.constrain}~|~${info.default}~|~${info.allowedValues}~|~${info.pattern}~|~${info.description}~|~${schema.title || ''}`;
  return info;
}

export function getSampleValueByType(schemaObj) {
  if (schemaObj.example === '') { return ''; }
  if (schemaObj.example === null) { return null; }
  if (schemaObj.example === 0) { return 0; }
  if (schemaObj.example) { return schemaObj.example; }

  if (Object.keys(schemaObj).length === 0) {
    return null;
  }
  if (schemaObj.$ref) { // Indicates a Circular ref
    return schemaObj.$ref;
  }
  let typeValue = schemaObj.format || schemaObj.type || (schemaObj.enum ? 'enum' : '');
  if (!typeValue) {
    if (schemaObj.enum) {
      typeValue = 'enum';
    } else if (schemaObj.anyOf) {
      typeValue = 'anyOf';
    } else if (schemaObj.oneOf) {
      typeValue = 'oneOf';
    }
  }

  switch (typeValue.toLowerCase()) {
    case 'int32':
    case 'int64':
    case 'integer':
      return 0;
    case 'float':
    case 'double':
    case 'number':
    case 'decimal':
      return 0.5;
    case 'string':
      return (schemaObj.enum ? schemaObj.enum[0] : (schemaObj.pattern ? schemaObj.pattern : 'string'));
    case 'url':
    case 'uri':
      return 'http://example.com';
    case 'byte':
      return btoa('string');
    case 'binary':
      return 'binary';
    case 'boolean':
      return false;
    case 'date':
      return (new Date(0)).toISOString().split('T')[0];
    case 'date-time':
      return (new Date(0)).toISOString();
    case 'dateTime':
      return (new Date(0)).toISOString();
    case 'password':
      return 'password';
    case 'enum':
      return schemaObj.enum[0];
    case 'uuid':
      return '3fa85f64-5717-4562-b3fc-2c963f66afa6';
    case 'email':
      return 'user@example.com';
    case 'hostname':
      return 'example.com';
    case 'ipv4':
      return '198.51.100.42';
    case 'ipv6':
      return '2001:0db8:5b96:0000:0000:426f:8e17:642a';
    case 'null':
      return null;
    default:
      if (schemaObj.nullable) {
        return null;
      }
      if (schemaObj.$ref) {
        return `data of type ${schemaObj.$ref}`;
      }
      return '?';
  }
}

/*
json2xml- TestCase
  {
    'prop1' : 'one',
    'prop2' : 'two',
    'prop3' : [ 'a', 'b', 'c' ],
    'prop4' : {
      'ob1' : 'val-1',
      'ob2' : 'val-2'
    }
  }
  <root>
    <prop1>simple</prop1>
    <prop2>
      <0> a </0>
      <1> b </1>
      <2> c </2>
    </prop2>
    <prop3>
      <ob1>val-1</ob1>
      <ob2>val-2</ob2>
    </prop3>
  </root>
*/
export function json2xml(obj, level = 1) {
  const indent = '  '.repeat(level);
  let xmlText = '';
  if (level === 1 && typeof obj !== 'object') {
    return `\n${indent}${obj.toString()}`;
  }
  for (const prop in obj) {
    if (Array.isArray(obj[prop])) {
      xmlText = `${xmlText}\n${indent}<${prop}> ${json2xml(obj[prop], level + 1)}\n${indent}</${prop}>`;
    } else if (typeof obj[prop] === 'object') {
      xmlText = `${xmlText}\n${indent}<${prop}> ${json2xml(obj[prop], level + 1)}\n${indent}</${prop}>`;
    } else {
      xmlText = `${xmlText}\n${indent}<${prop}> ${obj[prop].toString()} </${prop}>`;
    }
  }
  return xmlText;
}

function addSchemaInfoToExample(schema, obj) {
  if (typeof obj !== 'object' || obj === null) {
    return;
  }
  if (schema.title) {
    obj['::TITLE'] = schema.title;
  }
  if (schema.description) {
    obj['::DESCRIPTION'] = schema.description;
  }
}

function removeTitlesAndDescriptions(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return;
  }
  delete obj['::TITLE'];
  delete obj['::DESCRIPTION'];
  for (const k in obj) {
    removeTitlesAndDescriptions(obj[k]);
  }
}

function addPropertyExampleToObjectExamples(example, obj, propertyKey) {
  for (const key in obj) {
    obj[key][propertyKey] = example;
  }
}

function mergePropertyExamples(obj, propertyName, propExamples) {
  // Create an example for each variant of the propertyExample, merging them with the current (parent) example
  let i = 0;
  const mergedObj = {};
  for (const exampleKey in obj) {
    for (const propExampleKey in propExamples) {
      mergedObj[`example-${i}`] = { ...obj[exampleKey] };
      mergedObj[`example-${i}`][propertyName] = propExamples[propExampleKey];
      i++;
    }
  }
  return mergedObj;
}

/* For changing JSON-Schema to a Sample Object, as per the schema (to generate examples based on schema) */
export function schemaToSampleObj(schema, config = { }) {
  let obj = {};
  if (!schema) {
    return;
  }

  if (schema.allOf) {
    const objWithAllProps = {};

    if (schema.allOf.length === 1 && !schema.allOf[0].properties && !schema.allOf[0].items) {
      // If allOf has single item and the type is not an object or array, then its a primitive
      if (schema.allOf[0].$ref) {
        return '{  }';
      }
      if (schema.allOf[0].readOnly && config.includeReadOnly) {
        const tempSchema = schema.allOf[0];
        return getSampleValueByType(tempSchema);
      }
      return;
    }

    schema.allOf.map((v) => {
      if (v.type === 'object' || v.properties || v.allOf || v.anyOf || v.oneOf) {
        const partialObj = schemaToSampleObj(v, config);
        Object.assign(objWithAllProps, partialObj);
      } else if (v.type === 'array' || v.items) {
        const partialObj = [schemaToSampleObj(v, config)];
        Object.assign(objWithAllProps, partialObj);
      } else if (v.type) {
        const prop = `prop${Object.keys(objWithAllProps).length}`;
        objWithAllProps[prop] = getSampleValueByType(v);
      } else {
        return '';
      }
    });

    obj = objWithAllProps;
  } else if (schema.oneOf) {
    if (schema.oneOf.length > 0) {
      let i = 0;
      // Merge all examples of each oneOf-schema
      for (const key in schema.oneOf) {
        const oneOfSamples = schemaToSampleObj(schema.oneOf[key], config);
        for (const sampleKey in oneOfSamples) {
          obj[`example-${i}`] = oneOfSamples[sampleKey];
          addSchemaInfoToExample(schema.oneOf[key], obj[`example-${i}`]);
          i++;
        }
      }
    }
  } else if (schema.anyOf) {
    // First generate values for regular properties
    let commonObj;
    if (schema.type === 'object' || schema.properties) {
      commonObj = { 'example-0': {} };
      for (const propertyName in schema.properties) {
        if (schema.example) {
          commonObj = schema;
          break;
        }
        if (schema.properties[propertyName].deprecated && !config.includeDeprecated) { continue; }
        if (schema.properties[propertyName].readOnly && !config.includeReadOnly) { continue; }
        if (schema.properties[propertyName].writeOnly && !config.includeWriteOnly) { continue; }
        commonObj = mergePropertyExamples(commonObj, propertyName, schemaToSampleObj(schema.properties[propertyName], config));
      }
    }

    // Combine every variant of the regular properties with every variant of the anyOf samples
    let i = 0;
    for (const key in schema.anyOf) {
      const anyOfSamples = schemaToSampleObj(schema.anyOf[key], config);
      for (const sampleKey in anyOfSamples) {
        if (typeof commonObj !== 'undefined') {
          for (const commonKey in commonObj) {
            obj[`example-${i}`] = { ...commonObj[commonKey], ...anyOfSamples[sampleKey] };
          }
        } else {
          obj[`example-${i}`] = anyOfSamples[sampleKey];
        }
        addSchemaInfoToExample(schema.anyOf[key], obj[`example-${i}`]);
        i++;
      }
    }
  } else if (schema.type === 'object' || schema.properties) {
    obj['example-0'] = {};
    addSchemaInfoToExample(schema, obj['example-0']);
    if (schema.example) {
      obj['example-0'] = schema.example;
    } else {
      for (const propertyName in schema.properties) {
        if (schema.properties[propertyName].deprecated && !config.includeDeprecated) { continue; }
        if (schema.properties[propertyName].readOnly && !config.includeReadOnly) { continue; }
        if (schema.properties[propertyName].writeOnly && !config.includeWriteOnly) { continue; }
        if (schema.properties[propertyName].type === 'array' || schema.properties[propertyName].items) {
          if (schema.properties[propertyName].example) {
            addPropertyExampleToObjectExamples(schema.properties[propertyName].example, obj, propertyName);
          } else if (schema.properties[propertyName]?.items?.example) { // schemas and properties support single example but not multiple examples.
            addPropertyExampleToObjectExamples([schema.properties[propertyName].items.example], obj, propertyName);
          } else {
            const itemSamples = schemaToSampleObj(schema.properties[propertyName].items, config);
            const arraySamples = [];
            for (const key in itemSamples) {
              arraySamples[key] = [itemSamples[key]];
            }
            obj = mergePropertyExamples(obj, propertyName, arraySamples);
          }
          continue;
        }
        obj = mergePropertyExamples(obj, propertyName, schemaToSampleObj(schema.properties[propertyName], config));
      }
    }
  } else if (schema.type === 'array' || schema.items) {
    if (schema.example) {
      obj['example-0'] = schema.example;
    } else if (schema.items?.example) { // schemas and properties support single example but not multiple examples.
      obj['example-0'] = [schema.items.example];
    } else {
      const samples = schemaToSampleObj(schema.items, config);
      let i = 0;
      for (const key in samples) {
        obj[`example-${i}`] = [samples[key]];
        addSchemaInfoToExample(schema.items, obj[`example-${i}`]);
        i++;
      }
    }
  } else {
    return { 'example-0': getSampleValueByType(schema) };
  }
  return obj;
}

/**
 * For changing OpenAPI-Schema to an Object Notation,
 * This Object would further be an input to UI Components to generate an Object-Tree
 * @param {object} schema - Schema object from OpenAPI spec
 * @param {object} obj - recursivly pass this object to generate object notation
 * @param {number} level - recursion level
 * @param {string} suffix - used for suffixing property names to avoid duplicate props during object composion
 */
export function schemaInObjectNotation(schema, obj, level = 0, suffix = '') {
  if (!schema) {
    return;
  }
  if (schema.allOf) {
    const objWithAllProps = {};
    if (schema.allOf.length === 1 && !schema.allOf[0].properties && !schema.allOf[0].items) {
      // If allOf has single item and the type is not an object or array, then its a primitive
      const tempSchema = schema.allOf[0];
      return `${getTypeInfo(tempSchema).html}`;
    }
    // If allOf is an array of multiple elements, then all the keys makes a single object
    schema.allOf.map((v, i) => {
      if (v.type === 'object' || v.properties || v.allOf || v.anyOf || v.oneOf) {
        const propSuffix = (v.anyOf || v.oneOf) && i > 0 ? i : '';
        const partialObj = schemaInObjectNotation(v, {}, (level + 1), propSuffix);
        Object.assign(objWithAllProps, partialObj);
      } else if (v.type === 'array' || v.items) {
        const partialObj = schemaInObjectNotation(v, {}, (level + 1));
        Object.assign(objWithAllProps, partialObj);
      } else if (v.type) {
        const prop = `prop${Object.keys(objWithAllProps).length}`;
        const typeObj = getTypeInfo(v);
        objWithAllProps[prop] = `${typeObj.html}`;
      } else {
        return '';
      }
    });
    obj = objWithAllProps;
  } else if (schema.anyOf || schema.oneOf) {
    obj['::description'] = schema.description ? schema.description : '';
    // 1. First iterate the regular properties
    if (schema.type === 'object' || schema.properties) {
      obj['::description'] = schema.description ? schema.description : '';
      obj['::type'] = 'object';
      for (const key in schema.properties) {
        if (schema.required && schema.required.includes(key)) {
          obj[`${key}*`] = schemaInObjectNotation(schema.properties[key], {}, (level + 1));
        } else {
          obj[key] = schemaInObjectNotation(schema.properties[key], {}, (level + 1));
        }
      }
    }
    // 2. Then show allof/anyof objects
    const objWithAnyOfProps = {};
    const xxxOf = schema.anyOf ? 'anyOf' : 'oneOf';
    schema[xxxOf].forEach((v, index) => {
      if (v.type === 'object' || v.properties || v.allOf || v.anyOf || v.oneOf) {
        const partialObj = schemaInObjectNotation(v, {});
        objWithAnyOfProps[`::OPTION~${index + 1}${v.title ? `~${v.title}` : ''}`] = partialObj;
        objWithAnyOfProps['::type'] = 'xxx-of-option';
      } else if (v.type === 'array' || v.items) {
        // This else-if block never seems to get executed
        const partialObj = schemaInObjectNotation(v, {});
        objWithAnyOfProps[`::OPTION~${index + 1}${v.title ? `~${v.title}` : ''}`] = partialObj;
        objWithAnyOfProps['::type'] = 'xxx-of-array';
      } else {
        const prop = `::OPTION~${index + 1}${v.title ? `~${v.title}` : ''}`;
        objWithAnyOfProps[prop] = `${getTypeInfo(v).html}`;
      }
    });
    obj[(schema.anyOf ? `::ANY~OF ${suffix}` : `::ONE~OF ${suffix}`)] = objWithAnyOfProps;
    obj['::type'] = 'xxx-of';
    debugger;
  } else if (schema.type === 'object' || schema.properties) {
    obj['::description'] = schema.description ? schema.description : '';
    obj['::type'] = 'object';
    for (const key in schema.properties) {
      if (schema.required && schema.required.includes(key)) {
        obj[`${key}*`] = schemaInObjectNotation(schema.properties[key], {}, (level + 1));
      } else {
        obj[key] = schemaInObjectNotation(schema.properties[key], {}, (level + 1));
      }
    }
    if (schema.additionalProperties) {
      obj['<any-key>'] = schemaInObjectNotation(schema.additionalProperties, {});
    }
  } else if (schema.items) { // If Array
    obj['::description'] = schema.description
      ? schema.description
      : (schema.items.description
        ? `array&lt;${schema.items.description}&gt;`
        : '');
    obj['::type'] = 'array';
    obj['::props'] = schemaInObjectNotation(schema.items, {}, (level + 1));
  } else {
    const typeObj = getTypeInfo(schema);
    if (typeObj.html) {
      return `${typeObj.html}`;
    }
    return '';
  }
  return obj;
}

/* Create Example object */
export function generateExample(examples, example, schema, mimeType, includeReadOnly = true, outputType) {
  const finalExamples = [];
  // First check if examples is provided
  if (examples) {
    for (const eg in examples) {
      let egContent = '';
      let egFormat = 'json';
      if (mimeType.toLowerCase().includes('json')) {
        if (outputType === 'text') {
          egContent = typeof examples[eg].value === 'string' ? examples[eg].value : JSON.stringify(examples[eg].value, undefined, 2);
          egFormat = 'text';
        } else {
          egContent = examples[eg].value;
          if (typeof examples[eg].value === 'string') {
            try {
              const fixedJsonString = examples[eg].value.replace((/([\w]+)(:)/g), '"$1"$2').replace((/'/g), '"');
              egContent = JSON.parse(fixedJsonString);
              egFormat = 'json';
            } catch (err) {
              egFormat = 'text';
              egContent = examples[eg].value;
            }
          }
        }
      } else {
        egContent = examples[eg].value;
        egFormat = 'text';
      }

      finalExamples.push({
        exampleId: eg,
        exampleSummary: examples[eg].summary || eg,
        exampleDescription: examples[eg].description || '',
        exampleType: mimeType,
        exampleValue: egContent,
        exampleFormat: egFormat,
      });
    }
  } else if (example) {
    let egContent = '';
    let egFormat = 'json';
    if (mimeType.toLowerCase().includes('json')) {
      if (outputType === 'text') {
        egContent = typeof example === 'string' ? example : JSON.stringify(example, undefined, 2);
        egFormat = 'text';
      } else if (typeof example === 'object') {
        egContent = example;
        egFormat = 'json';
      } else if (typeof example === 'string') {
        try {
          egContent = JSON.parse(example);
          egFormat = 'json';
        } catch (err) {
          egFormat = 'text';
          egContent = example;
        }
      }
    } else {
      egContent = example;
      egFormat = 'text';
    }
    finalExamples.push({
      exampleId: 'Example',
      exampleSummary: '',
      exampleDescription: '',
      exampleType: mimeType,
      exampleValue: egContent,
      exampleFormat: egFormat,
    });
  }
  // If schema-level examples are not provided then generate one based on the schema field types
  if (finalExamples.length === 0) {
    if (schema) {
      if (schema.example) { // Note: schema.examples (plurals) is not allowed as per spec
        finalExamples.push({
          exampleId: 'Example',
          exampleSummary: '',
          exampleDescription: '',
          exampleType: mimeType,
          exampleValue: schema.example,
          exampleFormat: ((mimeType.toLowerCase().includes('json') && typeof schema.example === 'object') ? 'json' : 'text'),
        });
      } else if (mimeType.toLowerCase().includes('json') || mimeType.toLowerCase().includes('text') || mimeType.toLowerCase().includes('*/*') || mimeType.toLowerCase().includes('xml')) {
        let xmlRootStart = '';
        let xmlRootEnd = '';
        let exampleFormat = '';
        let exampleValue = '';
        if (mimeType.toLowerCase().includes('xml')) {
          xmlRootStart = (schema.xml && schema.xml.name) ? `<${schema.xml.name}>` : '<root>';
          xmlRootEnd = (schema.xml && schema.xml.name) ? `</${schema.xml.name}>` : '</root>';
          exampleFormat = 'text';
        } else {
          exampleFormat = outputType;
        }

        const samples = schemaToSampleObj(
          schema,
          {
            includeReadOnly,
            includeWriteOnly: true,
            deprecated: true,
          },
        );

        let i = 0;
        for (const samplesKey in samples) {
          if (!samples[samplesKey]) {
            continue;
          }
          const summary = samples[samplesKey]['::TITLE'] || `Example ${++i}`;
          const description = samples[samplesKey]['::DESCRIPTION'] || '';
          removeTitlesAndDescriptions(samples[samplesKey]);

          if (mimeType.toLowerCase().includes('xml')) {
            exampleValue = `${xmlRootStart}${json2xml(samples[samplesKey])}\n${xmlRootEnd}`;
          } else {
            exampleValue = outputType === 'text' ? JSON.stringify(samples[samplesKey], null, 2) : samples[samplesKey];
          }

          finalExamples.push({
            exampleId: samplesKey,
            exampleSummary: summary,
            exampleDescription: description,
            exampleType: mimeType,
            exampleFormat,
            exampleValue,
          });
        }
      } else {
        finalExamples.push({
          exampleId: 'Example',
          exampleSummary: '',
          exampleDescription: '',
          exampleType: mimeType,
          exampleValue: '',
          exampleFormat: 'text',
        });
      }
    } else {
      // No Example or Schema provided (should never reach here)
      finalExamples.push({
        exampleId: 'Example',
        exampleSummary: '',
        exampleDescription: '',
        exampleType: mimeType,
        exampleValue: '',
        exampleFormat: 'text',
      });
    }
  }
  return finalExamples;
}
