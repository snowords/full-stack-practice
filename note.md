## React 学习笔记
- 组件注册的时候写法为 JSX--类似于HTML但是又不一样，所有标签必须闭合，例如 <br> 必须写成 <br />
- **组件的内容通常包含一个根元素**
- **组件名首字母必须大写**
- 在这个示例中值得注意的是，即使将数组用 const 定义，也可以修改该数组中的内容。 因为数组是一个对象，而数组变量总是指向这同一个对象。 当添加新的元素时，数组的内容也将发生变化

- **useState**
- 状态的改变导致重新渲染-当应用启动时，执行 App 中的代码。 此代码使用useState hook 创建了计数器的应用状态初始值 counter
```
const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button
        handleClick={increaseByOne}
        text='plus'
      />
      <Button
        handleClick={setToZero}
        text='zero'
      />     
      <Button
        handleClick={decreaseByOne}
        text='minus'
      />           
    </div>
  )
}

```
---
## web开发宗旨
- 始终保持控制台打开
- `console.log('提示信息', props)` 一定要用 “,” 而不是 “+”

## 事件处理程序不是一个函数，而是一个变量赋值，
## 事件处理程序被分配了函数返回的值
···
<button onClick={console.log('clicked the button')}>
  button
</button>
···
消息被打印到控制台一次，但是当我们第二次单击按钮时什么也没有发生。 为什么即使我们的事件处理程序包含一个函数 console.log 也不能工作？

这里的问题是，我们的事件处理被定义为function call，这意味着事件处理程序实际上被分配了函数返回的值，而 console.log 的返回值是undefined。
## 事件处理程序不能是函数的调用（），否则会无限循环
## 如果要使用函数的调用，那么函数应该返回函数的函数
···
const App = (props) => {
  const [value, setValue] = useState(10)
  const setToValue = (newValue) => () => {
    setValue(newValue)
  }
  
  return (
    <div>
      {value}
      <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>increment</button>
    </div>
  )
}
···

## 不要在组件中定义组件