import { propTypes } from 'react-bootstrap/esm/Image';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BarChart from './BarChart';
import LineChart from './LineChart';

const TabContainer = ({xyPairs, title, xAxisLabel, yAxisLabel, PaletteSelected}) => {
    return (
        <Tabs>
            <TabList>
                <Tab><h3>Bar</h3></Tab>
                <Tab><h3>Line</h3></Tab>
            </TabList>
            <TabPanel>
                <BarChart xyPairs={xyPairs} title={title} xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel} PaletteSelected={PaletteSelected} /> 
            </TabPanel>
            <TabPanel>
                <LineChart xyPairs={xyPairs} title={title} xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel} PaletteSelected={PaletteSelected} /> 
            </TabPanel>
        </Tabs>
    );
}

export default TabContainer;
