import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
export const TabsPage = () => {
  const { tabId } = useParams();
  const activeTabClassName = ({ isActive }: { isActive: boolean }) => {
    return classNames({ 'is-active': isActive });
  };
  const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  return (
    <>
      <div className="section">
        <div className="container">
          <h1 className="title">Tabs page</h1>
          <div className="tabs is-boxed">
            <ul>
              <li
                data-cy="Tab"
                className={activeTabClassName({ isActive: tabId === 'tab-1' })}
              >
                <Link to="/tabs/tab-1">Tab 1</Link>
              </li>
              <li
                data-cy="Tab"
                className={activeTabClassName({ isActive: tabId === 'tab-2' })}
              >
                <Link to="/tabs/tab-2">Tab 2</Link>
              </li>
              <li
                data-cy="Tab"
                className={activeTabClassName({ isActive: tabId === 'tab-3' })}
              >
                <Link to="/tabs/tab-3">Tab 3</Link>
              </li>
            </ul>
          </div>

          <div className="block" data-cy="TabContent">
            {tabs.find(tab => tab.id === tabId)?.content ||
              'Please select a tab'}
          </div>
        </div>
      </div>
    </>
  );
};
