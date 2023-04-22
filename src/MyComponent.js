import PropsTypes from 'prop-types';
const MyComponent = props =>{
    return(
        <div>
            안녕하세요, 제 이름은 {props.name} 입니다.<br/>
            children 값은 {props.children}입니다.
        </div>
    );
};

MyComponent.defaultProps = {
    name: '기본이름'
};
MyComponent.propTypes = {
    name: PropsTypes.string
};

export default MyComponent;