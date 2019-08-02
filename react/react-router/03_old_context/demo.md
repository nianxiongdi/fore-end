```js
class Demo extends React.Component {

    constructor(props) {
        super(props);
    }
    
    // 设置传递给子对象的类型
    static childContextTypes = {
        name: PropTypes.string,
        sno: PropTypes.string,
    };
    
    // 设置传递给子对象的数据
    getChildContext() {
        return {
            name: 'qy',
            sno: '1869'
        };
    }

    render() {
        return (<div>
            {this.props.children}
        </div>);
    }

}

class Child extends React.Component {
    constructor(props) {
        super(props);
    }
    static contextTypes = { // 设置此对象， 结构父级传递过来的数据
        name: PropTypes.string,
        sno: PropTypes.string,
    };

    render() {
        // 这里就可以调用
        console.log(this.context); //{name: "qy", sno: "1869"}
        return <div>child</div>;
    }
}


class Test extends React.Component {
    
    render() {
        return <Demo>
            <Child />
        </Demo>;
    }
}
```