import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PackageCard from './Packages/PackageCard';
import TourGuide from '../TourGuide/TourGuide';

const Tourism = () => {
    return (
      <div>
      <Tabs>
<TabList>
<Tab>Overview</Tab>
<Tab>Our Packages</Tab>
<Tab>Meet Our Tour Guides</Tab>

</TabList>
<TabPanel>
<iframe width="560" height="315" src="https://www.youtube.com/embed/nHOAkgEB5c0?si=5qFBrYOoUs_ktrkv" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
</TabPanel>
<TabPanel>
<PackageCard></PackageCard>
</TabPanel>
<TabPanel>
<TourGuide></TourGuide>
</TabPanel>
</Tabs>
 </div>
    );
};

export default Tourism;

