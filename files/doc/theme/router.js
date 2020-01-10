import { hot } from 'react-hot-loader';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Chart, Geom, Axis, Tooltip as ChartTooltip, Legend } from 'bizcharts';
import { Loading, Card } from '@alifd/next';
import { Ajax } from 'Util';
import ChartBlock from '../../../components/chartBlock';
import TimeChart from '../../../components/timeChart';
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
        dataEx:res.data.data,
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
        dataIn:res.data.data,
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

function useDateRangeEx() {
  const [dateRangeEx, setDateRangeEx] = useState({
    startTime: moment().subtract(7, 'days').format('YYYY-MM-DD'),
    endTime: moment().format('YYYY-MM-DD'),
  });

  return {
    dateRangeEx,
    setDateRangeEx
  }
}

function useDateRangeIn() {
  const [dateRangeIn, setDateRangeIn] = useState({
    startTime: moment().subtract(7, 'days').format('YYYY-MM-DD'),
    endTime: moment().format('YYYY-MM-DD'),
  });

  return {
    dateRangeIn,
    setDateRangeIn
  }
}
 
const Index = () => {

  const { dateRangeEx, setDateRangeEx} = useDateRangeEx();
  const { dateRangeIn, setDateRangeIn } = useDateRangeIn();
  const {dataEx} = useSitesExternal(dateRangeEx) || {}
  const {dataIn} = useSitesInternal(dateRangeIn) || {}
  console.log('+++++++++++');  
  console.log(dataEx);
  console.log('+++++++++++');
  if (!dataEx || !dataEx.length) return '';
  if (!dataIn || !dataIn.length) return '';
//  console.log(dateRangeIn)
  const dvEx = dataHandle(dataEx);
  const dvIn = dataHandle(dataIn);
 
  const onRangeOkEx = (value) => {
    setDateRangeEx({
      startTime: value[0].format('YYYY-MM-DD'),
      endTime: value[1].format('YYYY-MM-DD'),
    })
  };

  const onRangeOkIn = (value) => {
    setDateRangeIn({
      startTime: value[0].format('YYYY-MM-DD'),
      endTime: value[1].format('YYYY-MM-DD'),
    })
  };
 
  return (
    <div className='block'>
      <div className='title'>
      Fusion Main Site External PV / UV
      </div>
      <div>
        <TimeChart data={dvEx}  onOk={onRangeOkEx} title={'PV/UV'}/>
      </div>
      <div className='title'>
      Fusion Main Site Internal PV / UV
      </div>
      <div>
        <TimeChart data={dvIn} onOk={onRangeOkIn} title={'PV/UV'}/>
      </div>
    </div>
  );
};

const ConnectedContainer = connect(state => state)(Index);

export default hot(module)(ConnectedContainer);
 