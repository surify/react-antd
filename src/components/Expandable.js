import React from 'react';
import {Collapse} from 'antd';

function Expandable() {
  return (
    <Collapse>
      <Collapse.Panel
        header="Shipping & Billing"
      >
        Shipping info
      </Collapse.Panel>
      <Collapse.Panel
        header="Auth. Info"
      >
        Authorization info
      </Collapse.Panel>
    </Collapse>
  );
}

export default Expandable;
