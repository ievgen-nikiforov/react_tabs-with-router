import { useNavigate, useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export const TabsPage = () => {
  const navigate = useNavigate();
  const { tabId } = useParams();

  const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  const selectedIndex = Math.max(
    -1,
    tabs.findIndex(tab => tab.id === tabId),
  );

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <Tabs
          selectedIndex={selectedIndex}
          onSelect={index => navigate(`/tabs/${tabs[index].id}`)}
        >
          <TabList>
            {tabs.map(tab => (
              <Tab key={tab.id} data-cy="Tab">
                {tab.title}
              </Tab>
            ))}
          </TabList>

          {tabs.map(tab => (
            <TabPanel key={tab.id}>
              <div className="block" data-cy="TabContent">
                {tab.content}
              </div>
            </TabPanel>
          ))}
          {selectedIndex === -1 && (
              <div className="block" data-cy="TabContent">
                Please select a tab
              </div>
          )}
        </Tabs>
      </div>
    </div>
  );
};
