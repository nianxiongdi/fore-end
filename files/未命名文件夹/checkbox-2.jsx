import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import UIState from '../mixin-ui-state';
import ConfigProvider from '../config-provider';
import Icon from '../icon';
import { obj, func } from '../util';

const noop = func.noop;
function isChecked(selectedValue, value) {
    return selectedValue.indexOf(value) > -1;
}
/**
 * Checkbox
 * @order 1
 */
class Checkbox extends UIState {
    static displayName = 'Checkbox';
    static propTypes = {
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        /**
         * 自定义类名
         */
        className: PropTypes.string,
        /**
         * checkbox id, 挂载在input上
         */
        id: PropTypes.string,
        /**
         * 自定义内敛样式
         */
        style: PropTypes.object,
        /**
         * 选中状态
         */
        checked: PropTypes.bool,
        /**
         * 默认选中状态
         */
        defaultChecked: PropTypes.bool,
        /**
         * 禁用
         */
        disabled: PropTypes.bool,
        /**
         * 通过属性配置label，
         */
        label: PropTypes.node,
        /**
         * Checkbox 的中间状态，只会影响到 Checkbox 的样式，并不影响其 checked 属性
         */
        indeterminate: PropTypes.bool,
        /**
         *  Checkbox 的默认中间态，只会影响到 Checkbox 的样式，并不影响其 checked 属性
         */
        defaultIndeterminate: PropTypes.bool,
        /**
         * 状态变化时触发的事件
         * @param {Boolean} checked 是否选中
         * @param {Event} e Dom 事件对象
         */
        onChange: PropTypes.func,
        /**
         * 鼠标进入enter事件
         * @param {Event} e Dom 事件对象
         */
        onMouseEnter: PropTypes.func,
        /**
         * 鼠标离开Leave事件
         * @param {Event} e Dom 事件对象
         */
        onMouseLeave: PropTypes.func,
    };

    static defaultProps = {
        defaultChecked: false,
        defaultIndeterminate: false,
        onChange: noop,
        onMouseEnter: noop,
        onMouseLeave: noop,
        prefix: 'next-',
    };

    static contextTypes = {
        onChange: PropTypes.func,
        __group__: PropTypes.bool,
        selectedValue: PropTypes.array,
        disabled: PropTypes.bool,
        prefix: PropTypes.string,
    };

    constructor(props, context) {
        // console.log(context)
        // console.log(props)
        super(props);

        let checked, indeterminate;

        //判断属性存在checked属性，若不存在则默认添加为false
        if ('checked' in props) {
            checked = props.checked;
        } else {
            checked = props.defaultChecked;
        }
        //中间状态
        if ('indeterminate' in props) {
            indeterminate = props.indeterminate;
        } else {
            indeterminate = props.defaultIndeterminate;
        }

        // 是否处于选中状态的判断
        if (context.__group__) {
            checked = isChecked(context.selectedValue, props.value);
        }

        //初始化 checked和indeterminate
        this.state = {
            checked,
            indeterminate,
        };

        // disabled 状态的判断
        this.disabled =
            props.disabled ||
            (context.__group__ && 'disabled' in context && context.disabled);
        this.onChange = this.onChange.bind(this);
    }

    // 当上级组件的信息改变时，会传入改变后的 props和context
    componentWillReceiveProps(nextProps, nextContext) { 
        // console.log(nextProps.value)
    
        //先判断是checkbox-group还是单个checkbox
        if (nextContext.__group__) {  // group的处理
            if ('selectedValue' in nextContext) { //是否存在selectedValue属性
                this.setState({
                    checked: isChecked( // 判断当前值 是否处于选中状态， 如是返回true 否则返回false  selectedValue已经选择值的集合
                        nextContext.selectedValue,
                        nextProps.value
                    ),
                });
            }

            //是否可点击的判断
            this.disabled =
                nextProps.disabled ||
                ('disabled' in nextContext && nextContext.disabled);
        } else {
            if ('checked' in nextProps) {
                this.setState({
                    checked: nextProps.checked,
                });
            }
            if ('indeterminate' in nextProps) {
                this.setState({
                    indeterminate: nextProps.indeterminate,
                });
            }
            this.disabled = nextProps.disabled;
        }
    }


    // 
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const { shallowEqual } = obj;
        return (
            !shallowEqual(this.props, nextProps) ||
            !shallowEqual(this.state, nextState) ||
            !shallowEqual(this.context, nextContext)
        );
    }

    onChange(e) {
        console.log(123)
        //获取cheked
        const checked = e.target.checked;
        //获取当前元素的值
        const value = this.props.value;

        //若是disable状态，则直接不执行 
        if (this.disabled) {
            return;
        }

        //  判断是否为checkbox-group，若是则进行调用上一级的onChange方法
        if (this.context.__group__) {
            console.log('before')
            this.context.onChange(value, e);
            console.log('after')
        } else {
            if (!('checked' in this.props)) {
                this.setState({
                    checked: checked,
                });
            }

            if (!('indeterminate' in this.props)) {
                this.setState({
                    indeterminate: false,
                });
            }
            this.props.onChange(checked, e);
        }

    }

    render() {
        /* eslint-disable no-unused-vars */
        const {
            id,
            className,
            children,
            style,
            label,
            onMouseEnter,
            onMouseLeave,
            rtl,
            ...otherProps
        } = this.props;
        const checked = !!this.state.checked;
        const disabled = this.disabled;
        const indeterminate = !!this.state.indeterminate;
        const prefix = this.context.prefix || this.props.prefix;

        const others = obj.pickOthers(Checkbox.propTypes, otherProps);
        const othersData = obj.pickAttrsWith(others, 'data-');

        let childInput = (
            <input
                {...obj.pickOthers(Checkbox.propTypes, otherProps)}
                id={id}
                disabled={disabled}
                checked={checked}
                type="checkbox"
                onChange={this.onChange}
                aria-checked={indeterminate ? 'mixed' : checked}
                className={`${prefix}checkbox-input`}
            />
        );

        // disable 无状态操作
        if (!disabled) {
            childInput = this.getStateElement(childInput);
        }
        const cls = classnames({
            [`${prefix}checkbox-wrapper`]: true,
            [className]: !!className,
            checked,
            disabled,
            indeterminate,
            [this.getStateClassName()]: true,
        });
        const labelCls = `${prefix}checkbox-label`;
        const type = indeterminate ? 'semi-select' : 'select';

        return (
            <label
                {...othersData}
                className={cls}
                style={style}
                dir={rtl ? 'rtl' : undefined}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span className={`${prefix}checkbox`}>
                    <span className={`${prefix}checkbox-inner`}>
                        <Icon
                            type={type}
                            size="xs"
                            className={indeterminate ? 'zoomIn' : ''}
                        />
                    </span>
                    {childInput}
                </span>
                {[label, children].map((item, i) =>
                    item ? (
                        <span key={i} className={labelCls}>
                            {item}
                        </span>
                    ) : null
                )}
            </label>
        );
    }
}

export default ConfigProvider.config(Checkbox);
