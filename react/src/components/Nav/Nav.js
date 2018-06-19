import React from 'react';
import { Menu, Icon } from 'antd';
import {Link} from 'react-router-dom'

class Nav extends React.Component {
    state = {
        current: 'mail',
    };
    handleClick = (e) => {
        //console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
    render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                {/*<Link to={'/game'}>*/}
                    {/*<Menu.Item key="mail">*/}
                        {/*<Icon type="mail" />Game*/}
                    {/*</Menu.Item>*/}
                {/*</Link>*/}
                {/*<Link to={'/rank'}>*/}
                    {/*<Menu.Item key="app">*/}
                        {/*<Icon type="appstore" />Rank*/}
                    {/*</Menu.Item>*/}
                {/*</Link>*/}
                <Menu.Item key="mail">
                    <Link to={'/game'}>
                        <Icon type="coffee" />Game
                    </Link>
                </Menu.Item>
                <Menu.Item key="app">
                    <Link to={'/rank'}>
                        <Icon type="line-chart" />Rank
                    </Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default Nav