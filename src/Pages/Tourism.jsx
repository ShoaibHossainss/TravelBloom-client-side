import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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
      <h2>
      Certainly! Here's an example of an overview section for a tourism website development project:

---

### Overview

Welcome to our tourism website development project, designed to showcase the natural beauty, cultural richness, and exciting attractions of [Destination Name]. Our goal is to create an immersive and user-friendly platform that serves as the ultimate guide for travelers looking to explore this unique destination.

The website will cater to a diverse audience, including families, solo adventurers, and business travelers, providing them with everything they need to plan the perfect trip. Key features will include an interactive map highlighting top attractions, accommodations, dining options, and transportation routes. Users will also have access to detailed itineraries, travel tips, and local event calendars to enhance their travel experience.

By combining stunning visuals, intuitive navigation, and comprehensive information, this website aims to be the go-to resource for anyone planning a visit to [Destination Name]. Whether you're looking for adventure, relaxation, or cultural exploration, our website will help you discover the best that [Destination Name] has to offer.

--- 

This example outlines the purpose, target audience, and key features of the website in a concise and engaging manner.
      </h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Tourism;