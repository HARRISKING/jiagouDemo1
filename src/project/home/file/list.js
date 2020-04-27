const items = [
  {
    label: '商品信息',
    name: 'item_msg',
    type: 'input',
    placeholder: '编号/通用名/商品名',
  },
  {
    label: '商品类目',
    name: 'category_id',
    type: 'cascader',
    placeholder: '请选择',
  },
  {
    label: '审核状态',
    type: 'select',
    name: 'audit_status',
    placeholder: '请选择',
    options: 'status|baseAuditStatus',
  },
  {
    label: '采购状态',
    name: 'purchase_status',
    type: 'select',
    placeholder: '请选择',
    options: 'status|purchaseStatus',
  },
  {
    label: '销售状态',
    name: 'sales_status',
    type: 'select',
    placeholder: '请选择',
    options: 'status|salesStatus',
  },
  {
    label: '启用',
    type: 'select',
    name: 'enable_use_switch',
    placeholder: '请选择',
    options: 'switchs|disabledSwitch',
  },
]
export default items;
