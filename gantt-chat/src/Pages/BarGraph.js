import React from 'react'
import Chart from 'react-apexcharts';


export const BarGraph = () => {
  return (
    <div>
        <div className='container-fluid mb-5 containerht'>
            <h3 className='text-center mt-3 mb-3'>Bar Chart in React.js</h3>

            <Chart  
            type='bar'
            width={1300}
            height={700}
            series={[
                {
                    name:'Social Media Subscriber',
                    data:[6578,6787,3245,9878,2324,5123,2435]
                }
            ]}
            options={ {
                title:{text:'Learning how to make bar chat',
                style:{fontSize:30}
            },
            subtitle:{
                text:'This is Bar Grap '
            },
            colors:['#f90000'],
            theme:{mode:'light'},

            xaxis:{
                categories:['Facebook',"Twitter","LinkedIn","Instagram","Github","Stackoverflow",'YuoTube'],
                title:{text:"Scial Media User",
                style:{color:'#f90000',fontSize:20}
            },
            },
            yaxis:{
                labels:{
                    formatter:(val)=>{return `${val}`},
                    style:{
                        color:'f90000',
                        fontSize:'10'
                    }
                },
                title:{
                    text:"User in K",
                    style:{
                        fontSize:15,
                        color:'gray'
                    }
                }
            },
            legend:{
                show:true,
                position:"left"
            },
            dataLabels:{
                formatter:(val)=>{return `${val}`},
                style:{
                    color:'#f4f4f4'
                }
            }
            }}
            >

            </Chart>
        </div>
    </div>
  )
}
