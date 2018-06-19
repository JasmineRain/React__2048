import React from 'react';
import PropTypes from 'prop-types'
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';
import Nav from '../../components/Nav/Nav'
require('./rank.css');

// 数据源
// const data = [
//     { genre: 'Sports', sold: 275, income: 2300 },
//     { genre: 'Strategy', sold: 115, income: 667 },
//     { genre: 'Action', sold: 120, income: 982 },
//     { genre: 'Shooter', sold: 350, income: 5271 },
//     { genre: 'Other', sold: 150, income: 3710 }
// ];

// 定义度量
const cols = {
    sold: { alias: '销售量' },
    genre: { alias: '游戏种类' }
};

class Rank extends React.Component{

    static propTypes = {
        data:PropTypes.array.isRequired,
        getRank:PropTypes.func.isRequired
    };

    state = {data:this.props.data};


    componentWillMount(){
        this.props.getRank();
    }

    render(){

        return(
            <div>
                <Nav/>
                <div className={'rank'}>
                    <Chart width={700} height={500} data={this.props.data.data} scale={cols}>
                        <Axis name="genre" />
                        <Axis name="sold" />
                        <Legend position="top" dy={-20} />
                        <Tooltip />
                        <Geom type="interval" position="genre*sold" color="genre" />
                    </Chart>
                </div>
            </div>
        );
    }

}

export default Rank