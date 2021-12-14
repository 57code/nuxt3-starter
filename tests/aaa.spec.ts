// Step 1: 定义一个测试套 Test Suite
describe('tree', () => {
  // Step 2: 定义一个单元测试 Test
  // i think 'tree should render correctly'
  it('tree should render correctly', () => {
    // Step 3: 期望（expect）tree组件的class里面包含（toContain）'devui-tree'
    expect(wrapper.classes()).toContain('devui-tree')
    
    // 期望（expect）tree组件的子元素数量为（toBe）6
    expect(wrapper.element.childElementCount).toBe(6)
  })
})
