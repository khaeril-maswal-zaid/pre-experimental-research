import NavbarComp from "../Components/NavbarComp";
import JumbotronComp from "../Components/JumbotronComp";
import CollactionD from "../Components/CollactionD";

import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

const DataCollaction = () => {
  return (
    <>
      <NavbarComp />
      <JumbotronComp />

      <Tabs
        aria-label="Tabs with icons"
        variant="underline"
        className="container mx-auto"
      >
        <Tabs.Item active title="Classif. Pre Test" icon={HiUserCircle}>
          <CollactionD />
        </Tabs.Item>
        <Tabs.Item active title="Classif. Post Test" icon={HiUserCircle}>
          <CollactionD />
        </Tabs.Item>

        <Tabs.Item active title="Gain" icon={HiUserCircle}>
          <CollactionD />
        </Tabs.Item>

        <Tabs.Item title="Dashboard" icon={MdDashboard}>
          This is
          <span className="font-medium text-gray-800 dark:text-white">
            Dashboard tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </Tabs.Item>
        <Tabs.Item title="Settings" icon={HiAdjustments}>
          This is
          <span className="font-medium text-gray-800 dark:text-white">
            Settings tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </Tabs.Item>
        <Tabs.Item title="Contacts" icon={HiClipboardList}>
          This is
          <span className="font-medium text-gray-800 dark:text-white">
            Contacts tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </Tabs.Item>
        <Tabs.Item title="Disabled">Disabled content</Tabs.Item>
      </Tabs>
    </>
  );
};

export default DataCollaction;
