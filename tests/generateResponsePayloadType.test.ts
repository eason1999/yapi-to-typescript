import generateResponsePayloadType from '../src/generateResponsePayloadType'

test('mockjs-json', async () => {
  const api: any = {
    _id: 1460,
    method: 'POST',
    catid: 91,
    title: 'post',
    path: '/post',
    project_id: 27,
    res_body_type: 'json',
    uid: 63,
    add_time: 1543250344,
    up_time: 1543331580,
    __v: 0,
    desc: '',
    markdown: '',
    req_body_type: 'file',
    res_body: '{\n   "x|1-5": [\n      {\n         "email": "@email"\n      }\n   ],\n   "id": "@id",\n   "number": 1\n}',
    req_body_other: 'ffffffffffffffffffffffff',
    tag: [],
    index: 0,
    api_opened: false,
    res_body_is_json_schema: false,
    req_body_form: [
      {
        _id: '5bfd5efca4a6ea4ee3dcb691',
        desc: 'aaa',
        type: 'text',
        name: 'a',
        required: '1',
      },
      {
        _id: '5bfd5efca4a6ea4ee3dcb690',
        desc: 'bbb',
        example: 'B',
        type: 'text',
        name: 'b',
        required: '0',
      },
    ],
    req_body_is_json_schema: true,
    req_params: [],
    req_headers: [],
    req_query: [],
    query_path: {
      path: '/post',
      params: [],
    },
    type: 'static',
    status: 'undone',
    edit_uid: 0,
    username: '方剑成',
  }
  expect(await generateResponsePayloadType(api)).toMatchSnapshot()
})

test('json-schema: object', async () => {
  const api: any = {
    _id: 1460,
    method: 'POST',
    catid: 91,
    title: 'post',
    path: '/post',
    project_id: 27,
    res_body_type: 'json',
    uid: 63,
    add_time: 1543250344,
    up_time: 1543331927,
    __v: 0,
    desc: '',
    markdown: '',
    req_body_type: 'file',
    res_body: '{"type":"object","title":"empty object","properties":{"a":{"type":"string","description":"aa"},"b":{"type":"number","description":"bb"},"c":{"type":"object","properties":{"c0":{"type":"boolean","description":"c00"},"c1":{"type":"array","items":{"type":"number","description":"c11111"}}},"required":["c0","c1"]}},"required":["a","b","c"]}',
    req_body_other: 'ffffffffffffffffffffffff',
    tag: [],
    index: 0,
    api_opened: false,
    res_body_is_json_schema: true,
    req_body_form: [
      {
        _id: '5bfd6057a4a6ea4ee3dcb695',
        desc: 'aaa',
        type: 'text',
        name: 'a',
        required: '1',
      },
      {
        _id: '5bfd6057a4a6ea4ee3dcb694',
        desc: 'bbb',
        example: 'B',
        type: 'text',
        name: 'b',
        required: '0',
      },
    ],
    req_body_is_json_schema: true,
    req_params: [],
    req_headers: [],
    req_query: [],
    query_path: {
      path: '/post',
      params: [],
    },
    type: 'static',
    status: 'undone',
    edit_uid: 0,
    username: '方剑成',
  }
  expect(await generateResponsePayloadType(api)).toMatchSnapshot()
})

test('json-schema: array', async () => {
  const api: any = {
    _id: 1460,
    method: 'POST',
    catid: 91,
    title: 'post',
    path: '/post',
    project_id: 27,
    res_body_type: 'json',
    uid: 63,
    add_time: 1543250344,
    up_time: 1543332199,
    __v: 0,
    desc: '',
    markdown: '',
    req_body_type: 'file',
    res_body: '{"type":"array","items":{"type":"object","properties":{"a":{"type":"string","description":"aa"},"b":{"type":"array","items":{"type":"number","description":"bbbb"},"description":"bb"},"c":{"type":"object","properties":{"c0":{"type":"string","description":"c000"}},"required":["c0"]}},"required":["a","b","c"]}}',
    req_body_other: 'ffffffffffffffffffffffff',
    tag: [],
    index: 0,
    api_opened: false,
    res_body_is_json_schema: true,
    req_body_form: [
      {
        _id: '5bfd6167a4a6ea4ee3dcb699',
        desc: 'aaa',
        type: 'text',
        name: 'a',
        required: '1',
      },
      {
        _id: '5bfd6167a4a6ea4ee3dcb698',
        desc: 'bbb',
        example: 'B',
        type: 'text',
        name: 'b',
        required: '0',
      },
    ],
    req_body_is_json_schema: true,
    req_params: [],
    req_headers: [],
    req_query: [],
    query_path: {
      path: '/post',
      params: [],
    },
    type: 'static',
    status: 'undone',
    edit_uid: 0,
    username: '方剑成',
  }
  expect(await generateResponsePayloadType(api)).toMatchSnapshot()
})

test('others', async () => {
  const api: any = {
    _id: 1460,
    method: 'POST',
    catid: 91,
    title: 'post',
    path: '/post',
    project_id: 27,
    res_body_type: 'raw',
    uid: 63,
    add_time: 1543250344,
    up_time: 1543332030,
    __v: 0,
    desc: '',
    markdown: '',
    req_body_type: 'file',
    res_body: '22',
    req_body_other: 'ffffffffffffffffffffffff',
    tag: [],
    index: 0,
    api_opened: false,
    res_body_is_json_schema: true,
    req_body_form: [
      {
        _id: '5bfd60bea4a6ea4ee3dcb697',
        desc: 'aaa',
        type: 'text',
        name: 'a',
        required: '1',
      },
      {
        _id: '5bfd60bea4a6ea4ee3dcb696',
        desc: 'bbb',
        example: 'B',
        type: 'text',
        name: 'b',
        required: '0',
      },
    ],
    req_body_is_json_schema: true,
    req_params: [],
    req_headers: [],
    req_query: [],
    query_path: {
      path: '/post',
      params: [],
    },
    type: 'static',
    status: 'undone',
    edit_uid: 0,
    username: '方剑成',
  }
  expect(await generateResponsePayloadType(api)).toMatchSnapshot()
})
