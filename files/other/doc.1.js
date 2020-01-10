import { hot } from 'react-hot-loader';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Chart, Geom, Axis, Tooltip as ChartTooltip, Legend } from 'bizcharts';
import { Loading, Card } from '@alifd/next';
import { Ajax } from 'Util';
import ChartBlock from '../../../components/chartBlock';
import PV from '../../../components/timeChart';
import DataSet from '@antv/data-set';
import moment from 'moment'
 
//sitesViewsExternal
function useSitesExternal(data) {

  const [sites, setSites] = useState({
    loading: false,
  });

  useEffect(() => {
    console.log('useEffect');
    // console.log(dateRange);
    setSites({
      loading: true,
    });
    Ajax({
      method: 'get',
      url: '/frontend/sites/viewsExternal',
      params: {
        ...data
      }
    }).then((res) => {
      console.log(res);
      setSites({
        data:res.data.data,
        loading: false,
      });
    }).catch(e=> console.log(e));
  }, [data]);

  return sites;
}


function useSitesInternal(data) {
  const [sites, setSites] = useState({
    loading: false,
  });

  useEffect(() => {
    console.log('useEffect');
    // console.log(dateRange);
    setSites({
      loading: true,
    });
    Ajax({
      method: 'get',
      url: '/frontend/sites/viewsInternal',
      params: {
        ...data
      }
    }).then((res) => {
      console.log(res);
      setSites({
        data1:res.data.data,
        loading: false,
      });
    }).catch(e=> console.log(e));
  }, [data]);

  return sites;
}


// data transform
function dataHandle(data){ 
  const ds = new DataSet();
  const dv = ds.createView().source(data);
  dv.transform({
    type: "fold",
    fields: ["pv", "uv"],
    key: "type",
    value: "value"
  });

  return dv;
}

function useDateRange() {
  const [dateRange, setDateRange] = useState({
    startTime: moment().subtract(7, 'days').format('YYYY-MM-DD'),
    endTime: moment().format('YYYY-MM-DD'),
  });

  return {
    dateRange,
    setDateRange
  }
}

function useDateRange1() {
  const [dateRange1, setDateRange1] = useState({
    startTime: moment().subtract(7, 'days').format('YYYY-MM-DD'),
    endTime: moment().format('YYYY-MM-DD'),
  });

  return {
    dateRange1,
    setDateRange1
  }
}


// function useDateRange() {
//   const [dateRange, setDateRange] = useState({
//     startTime: moment().subtract(7, 'days').format('YYYY-MM-DD'),
//     endTime: moment().format('YYYY-MM-DD'),
//   });
 
const Index = () => {

  // const [views, setViews] = useState({
  //   loading: false,
  // });
  // const [dateRange, setDateRange] = useState({
  //   startTime: moment().subtract(7, 'days').format('YYYY-MM-DD'),
  //   endTime: moment().format('YYYY-MM-DD'),
  // });
  // const [dateRangeEx, setDateRangeEx] = useState({
  //   startTime: moment().subtract(7, 'days').format('YYYY-MM-DD'),
  //   endTime: moment().format('YYYY-MM-DD'),
  // });

  const { dateRange, setDateRange} = useDateRange();
  const { dateRange1, setDateRange1 } = useDateRange1();
  const {data} = useSitesExternal(dateRange)
  const {data1} = useSitesInternal(dateRange1)
 

  // useEffect(() => {
  //   console.log('useEffect');
  //   console.log(dateRange);
  //   setViews({
  //     loading: true,
  //   });
  //   Ajax({
  //     method: 'get',
  //     url: '/frontend/sites/views',
  //     params: {
  //       startTime:dateRangeEx.startTime,
  //       endTime:dateRangeEx.endTime,
  //     }
  //   }).then((res) => {
  //     console.log(res);
  //     setViews({
  //       ...views,
  //       data1:res.data.data,
  //       loading: false,
  //     });
  //   }).catch(e=> console.log(e));
  // }, [dateRangeEx]);

 
  // const { setDateRange } = useDateRange();
  // const { data } = useSiteViews(dateRange);
 
  // const data = views.data;
  // const data1 = views.data;

  // console.log(data);

  // const pvuv = pv.concat(uv);
  console.log('============');
  console.log(data);
  console.log('============');
  if (!data || !data.length) return '';
  if (!data1 || !data1.length) return '';

  // const ds = new DataSet();
  // const dv = ds.createView().source(data);
  // dv.transform({
  //   type: "fold",
  //   fields: ["pv", "uv"],
  //   key: "type",
  //   value: "value"
  // });
  const dv = dataHandle(data);
  const dv1 = dataHandle(data1);

  // const dv1 = ds.createView().source(data1);
  // dv1.transform({
  //   type: "fold",
  //   fields: ["pv", "uv"],
  //   key: "type",
  //   value: "value"
  // }); 
   
  // const onRangeOk = (value) => console.log('onOk: [%s, %s]', value[0].format('YYYY-MM-DD'), value[1].format('YYYY-MM-DD HH:mm:ss'));

  const onRangeOk = (value) => {
    setDateRange({
      startTime: value[0].format('YYYY-MM-DD'),
      endTime: value[1].format('YYYY-MM-DD'),
    })
  };

  const onRangeOk1 = (value) => {
    setDateRange1({
      startTime: value[0].format('YYYY-MM-DD'),
      endTime: value[1].format('YYYY-MM-DD'),
    })
  };
 
  // if (data) {
  //     ds = new DataSet();
  //     dv = ds.createView().source(data);

  //     dv.transform({
  //         type: 'fold', // 字段展开
  //         fields: ['pv', 'uv'],
  //         key: 'type',
  //         value: 'value',
  //         retains: ['time']
  //     });
  // }

  return (
    <div className='block'>
      <div className='title'>
      Fusion Main Site External PV / UV
      </div>
      <div>
        <PV data={dv}  onOk={onRangeOk} />
      </div>
      <div className='title'>
      Fusion Main Site Internal PV / UV
      </div>
      <div>
        <PV data={dv1} onOk={onRangeOk1}  />
      </div>
    </div>
  );
};

const ConnectedContainer = connect(state => state)(Index);

export default hot(module)(ConnectedContainer);
