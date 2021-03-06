import React,{Component} from 'react';
import {Bar} from 'react-chartjs-2';


class Chart extends Component{
      constructor(props){
            super(props);
            this.state = {
                  chartData:{
                        labels:['Graps','Mango','Apricot','PineApple','Blackberry',
                  'Banana','Papaya'],
                  datasets:[
                        {
                              label:'Top Views',
                              data:[
                                    50,
                                    45,
                                    40,
                                    30,
                                    25,
                                    15,
                                    5
                              ],
                              backgroundColor:[
                                    'rgba(255,99,132,0.6)',
                                    'rgba(54,162,235,0.6)',
                                    'rgba(255,206,86,0.6)',
                                    'rgba(75,192,192,0.6)',
                                    'rgba(153,102,255,0.6)',
                                    'rgba(255,159,64,0.6)',
                                    'rgba(255,99,132,0.6)'
                              ]
                        }
                  ]
                  }
            }
      }


                   render(){
                         return(
                               <div classname="chart">
                                     <Bar
                                     data={this.state.chartData}
                                     options={{}}
                                     />
                                     </div>
                         )
                   }
                  }

                  export default Chart;