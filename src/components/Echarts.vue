<template>
   <div>
        <div>
            <el-button type="success" @click="toggleDialogHandle">查看统计图</el-button>
            <el-dialog
            title="提示"
            :visible="getDialogVisible"
            width="50%"
            :before-close="toggleDialogHandle">
                <div id="main" style="height:500px;"></div>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="toggleDialogHandle">取 消</el-button>
                    <el-button type="primary" @click="toggleDialogHandle">确 定</el-button>
                </span>
            </el-dialog>
        </div>
   </div>
</template>

<script>
// var echarts = require('echarts');

export default {
    computed:{
        getDialogVisible(){
            const isVisible = this.$store.state.isDialogVisible
            return isVisible;
        }
    },
    mounted(){
        console.log(this.$store.state.userStore)
    },
    methods:{
        toggleDialogHandle(){
            this.$store.commit('toggleDialogHandle');
            this.$nextTick(()=>{
                this.reloadEcharts();
            })
        },
        reloadEcharts(){
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('main'));
            // 绘制图表
            myChart.setOption({
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                xAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            });
        }
    }
}

</script>
<style scoped>
</style>