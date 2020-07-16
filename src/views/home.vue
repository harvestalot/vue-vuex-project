<template>
   <div class="home_container">
       <dv-border-box-1 :color="['#222', '#2196f3']">
           <div>
               <el-row :gutter="60" style="width:200px;height:100px;" >
                    <el-col :span="6"><dv-digital-flop :config="number_config" /></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                </el-row>
               
           </div>
           <!-- <dv-flyline-chart-enhanced :config="map_config" style="width:740px;height:600px;" /> -->
           <dv-charts :option="option_line" style="height:300px"/>
           <dv-charts :option="option_bar_line" style="height:400px"/>
           <!-- <dv-active-ring-chart :config="config" style="width:300px;height:300px" /> -->
       </dv-border-box-1>
       
   </div>
</template>

<script>
export default {
    data(){
        return {
            number_config:{
                number: [5626989.89],
                toFixed: 2,
                content: '{nt} 元',
                animationFrame:2000
            },
            option_line : {
                title: {
                    text: '用户注册量趋势'
                },
                xAxis: {
                    name: '月份',
                    data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月']
                },
                yAxis: {
                    name: '注册量',
                    data: 'value'
                },
                series: [
                    {
                    data: [1200, 2230, 1900, 2100, 3500, 4200, 3985, 4500],
                    type: 'line',
                    lineArea: {
                        show: true,
                        gradient: ['rgba(55, 162, 218, 0.6)', 'rgba(55, 162, 218, 0)']
                    }
                    }
                ]
            },
            option_bar_line : {
                title: {
                    text: '气温与降雨量走势图'
                },
                legend: {
                    data: ['降雨量', '气温'],
                    bottom: 10
                },
                xAxis: {
                    data: [
                    '一月份', '二月份', '三月份', '四月份', '五月份', '六月份',
                    '七月份', '八月份', '九月份', '十月份', '十一月份', '十二月份'
                    ],
                    axisLabel: {
                    style: {
                        rotate: 20,
                        textAlign: 'left',
                        textBaseline: 'top'
                    }
                    },
                    axisTick: {
                    show: false
                    }
                },
                yAxis: [
                    {
                    name: '销售额',
                    data: 'value',
                    min: 0,
                    max: 300,
                    interval: 50,
                    splitLine: {
                        style: {
                        lineDash: [3,3]
                        }
                    },
                    axisLabel: {
                        formatter: '{value} ml'
                    },
                    axisTick: {
                        show: false
                    }
                    },
                    {
                    name: '订单数',
                    data: 'value',
                    position: 'right',
                    min: 0,
                    max: 30,
                    interval: 5,
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        formatter: '{value}',
                    },
                    axisTick: {
                        show: false
                    }
                    }
                ],
                series: [
                    {
                    name: '销售额',
                    data: [
                        175, 125, 90, 130, 45, 65,
                        65, 47, 50, 52, 45, 37
                    ],
                    type: 'bar',
                    gradient: {
                        color: ['#37a2da', '#67e0e3']
                    },
                    animationCurve: 'easeOutBounce'
                    },
                    {
                    name: '订单量',
                    data: [
                    23, 18, 16, 14, 10, 8,
                    6, 6, 6, 6, 6, 5
                    ],
                    type: 'line',
                    yAxisIndex: 1,
                    animationCurve: 'easeOutBounce'
                    }
                ]
            },
            config:{
                digitalFlopStyle:{
                    fill:"#222",
                },
                data:[
                    {
                        name: '周口',
                        value: 55
                    },
                    {
                        name: '南阳',
                        value: 120
                    },
                    {
                        name: '西峡',
                        value: 78
                    },
                    {
                        name: '驻马店',
                        value: 66
                    },
                    {
                        name: '新乡',
                        value: 80
                    }
                ]
            },
            map_config:{
                points: [
                    {
                    name: '郑州',
                    coordinate: [0.48, 0.35]
                    },
                    {
                    name: '新乡',
                    coordinate: [0.52, 0.23]
                    },
                    {
                    name: '焦作',
                    coordinate: [0.43, 0.29]
                    },
                    {
                    name: '开封',
                    coordinate: [0.59, 0.35]
                    },
                    {
                    name: '许昌',
                    coordinate: [0.53, 0.47]
                    },
                    {
                    name: '平顶山',
                    coordinate: [0.45, 0.54]
                    },
                    {
                    name: '洛阳',
                    coordinate: [0.36, 0.38]
                    },
                    {
                    name: '周口',
                    coordinate: [0.62, 0.55]
                    },
                    {
                    name: '漯河',
                    coordinate: [0.56, 0.56]
                    },
                    {
                    name: '南阳',
                    coordinate: [0.37, 0.66]
                    },
                    {
                    name: '信阳',
                    coordinate: [0.55, 0.81]
                    },
                    {
                    name: '驻马店',
                    coordinate: [0.55, 0.67]
                    },
                    {
                    name: '济源',
                    coordinate: [0.37, 0.29]
                    },
                    {
                    name: '三门峡',
                    coordinate: [0.20, 0.36]
                    },
                    {
                    name: '商丘',
                    coordinate: [0.76, 0.41]
                    },
                    {
                    name: '鹤壁',
                    coordinate: [0.59, 0.18]
                    },
                    {
                    name: '濮阳',
                    coordinate: [0.68, 0.17]
                    },
                    {
                    name: '安阳',
                    coordinate: [0.59, 0.10]
                    }
                ],
                lines: [
                    {
                    source: '新乡',
                    target: '郑州'
                    },
                    {
                    source: '焦作',
                    target: '郑州'
                    },
                    {
                    source: '开封',
                    target: '郑州'
                    },
                    {
                    source: '许昌',
                    target: '郑州'
                    },
                    {
                    source: '平顶山',
                    target: '郑州'
                    },
                    {
                    source: '洛阳',
                    target: '郑州'
                    },
                    {
                    source: '周口',
                    target: '郑州'
                    },
                    {
                    source: '漯河',
                    target: '郑州'
                    },
                    {
                    source: '南阳',
                    target: '郑州'
                    },
                    {
                    source: '信阳',
                    target: '郑州'
                    },
                    {
                    source: '驻马店',
                    target: '郑州'
                    },
                    {
                    source: '济源',
                    target: '郑州'
                    },
                    {
                    source: '三门峡',
                    target: '郑州'
                    },
                    {
                    source: '商丘',
                    target: '郑州'
                    },
                    {
                    source: '鹤壁',
                    target: '郑州'
                    },
                    {
                    source: '濮阳',
                    target: '郑州'
                    },
                    {
                    source: '安阳',
                    target: '郑州'
                    }
                ],
                bgImgSrc: require('../assets/map.jpg') 
            }
        }
    }
}

</script>
<style scoped>
.home_container{
    background-color: #fff;
}
</style>
<style>
    .home_container .dv-active-ring-chart .active-ring-info .active-ring-name{
        color: #222;
    }
</style>