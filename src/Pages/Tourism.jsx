import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PackageCard from './Packages/PackageCard';
import TourGuide from '../TourGuide/TourGuide';


const Tourism = () => {
    return (
      <div className='md:mt-10 mt-4'>
        <h3 className="text-3xl text-center mb-2">Tourism and Travel Guide Section</h3>
      <Tabs>
<TabList>
<Tab>Overview</Tab>
<Tab>Our Packages</Tab>
<Tab>Meet Our Tour Guides</Tab>

</TabList>
<TabPanel>
<div>
  <h3 className="text-center text-xl mb-6 text-lime-700">
  Take a closer look at the wonders of Bangladesh in our overview section. <br />
  This featured video offers a glimpse into the vibrant culture, breathtaking landscapes, and rich heritage of this remarkable country. <br />
  Whether you're planning your first visit or reminiscing about past travels, let this visual journey inspire and captivate you.
</h3>
<div className="grid md:grid-cols-2 grid-cols-1 gap-6 w-full mx-auto"> 
<iframe className="md:w-[560px] md:h-[315px] w-full" width="560" height="315" src="https://www.youtube.com/embed/rn0nkEZdoRg?si=45Oq1pcmWbQrssYw" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
<iframe className="md:w-[560px] md:h-[315px] w-full" src="https://www.youtube.com/embed/-758gHCMn0M?si=AGKF_ugOHN4VI8uG" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
<iframe className="md:w-[560px] md:h-[315px] w-full" src="https://www.youtube.com/embed/vY7n5wct9Zk?si=lSU7PHJ-DDW_7VmQ" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
<iframe className="md:w-[560px] md:h-[315px] w-full" width="560" height="315" src="https://www.youtube.com/embed/YAuMCIdWjHE?si=3euGLwmjH2gJfQan" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
<iframe className="md:w-[560px] md:h-[315px] w-full" width="560" height="315" src="https://www.youtube.com/embed/17xhWCv9uhQ?si=V1Zbi2RVWafkhA55" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
<iframe className="md:w-[560px] md:h-[315px] w-full" width="560" height="315" src="https://www.youtube.com/embed/sibiT9DibhU?si=4bYQE3kLFqN2jgbQ" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>

</div>
</div>
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

