import React, {useState, useEffect} from 'react';

// components
import NavIndex from '@/components/globals/nav/navIndex';
import Footer from '@/components/globals/templates/footer';

// inner components
import ThreadBlock from './components/threadBlock';
import ForumCategoryBlock from './components/forumCategoryBlock';
import ForumThreadDialog from './components/forumThreadDialog';

// next
import Image from 'next/image'

// icons
import { FiPieChart, FiZap, FiGrid, FiTriangle} from "react-icons/fi";

interface forumIndexPropsI {}
interface categoryI {
  label: String;
  sub_cats: Array<String>;
}

const ForumIndex: React.FC<forumIndexPropsI> = ({}) => {
  // states
  const [categories, setCategories] = useState<categoryI[]>([
    {
      label: 'Car Economy', 
      sub_cats: ['Item 1', 'Item 2', 'Item 3']
    }, 
    {
      label: 'Car Parking', 
      sub_cats: ['Item 1', 'Item 2', 'Item 3']
    }, 
    {
      label: 'Car Health', 
      sub_cats: ['Item 1', 'Item 2', 'Item 3']
    }, 
    {
      label: 'Car Tricks and Tips', 
      sub_cats: ['Item 1', 'Item 2', 'Item 3']
    }, 
  ]);
  const [selectedCategory, setSelectedCategory] = useState<String>('');

  // toggle states
  const [isCreatingThread, setIsCreatingThread] = useState<boolean>(false);
  const toggleCreatingThread = () => setIsCreatingThread(prev => !prev)

  const [threads, setThreads] = useState<number[]>([1,2,3,4,5]);
  const [currentThread, setCurrentThread] = useState<number>(0);
  const [showCategoryPanel, setShowCategoryPanel] = useState<boolean>(false);
  const [showStatisticsPanel, setShowStatisticsPanel] = useState<boolean>(false);
  const toggleShowCategoryPanel:React.MouseEventHandler<HTMLDivElement> | undefined = () => setShowCategoryPanel(prev => !prev)
  const toggleShowStatisticsPanel:React.MouseEventHandler<HTMLDivElement> | undefined = () => setShowStatisticsPanel(prev => !prev)

  return (
    <div className={`h-auto w-full bg-white px-5 md:px-16 ${currentThread > 0 || currentThread !== null ? 'overflow-hidden' : ''}`}>
      {/* Nav Menu */}
      <NavIndex />
      {/* Layout */}
      <section className='min-h-screen w-full flex items-start justify-center md:space-x-2 mt-10 mb-20'>
        {/* Left */}
        <div className={`flex-col items-start justify-start space-y-2 ${showCategoryPanel ? 'h-full w-full flex position fixed left-0 top-0 bottom-0 z-50' : 'h-full hideOnMobile w-1/4 position relative'}`}>
          {/* Filters */}
          <div className='h-full md:h-auto w-full bg-gray-50 rounded-lg flex flex-col items-start justify-start py-8 px-5 overflow-y-auto overflow-x-hidden'>
            {/* Close */}
            <div 
            className='hideOnDesktop position absolute top-8 right-5 text-red-500' 
            onClick={toggleShowCategoryPanel}>Close</div>

            {/* Block */}
            <div className='h-auto w-full flex items-center justify-start pb-3 pl-2 space-x-3'>
              <FiGrid className='la la-chart-pie text-xl text-black' />
              <h3 className='text-lg font-medium text-gray-900'>Forum Categories</h3>
            </div>
            {/* Categories */}
            <section className='h-auto w-full flex flex-col items-center justify-center space-y-3 my-4'>
              {/* Block */}
              {
                categories && categories.map((category, id) => {
                  return (
                    <ForumCategoryBlock
                    key={id}
                    cb={setSelectedCategory}
                    label={category.label}
                    sub_cats={category.sub_cats}
                    />
                  )
                })
              }
            </section> 
          </div>
        </div>
        
        {/* Middle */}
        <div className='h-full w-full md:w-1/2 flex flex-col items-start justify-start space-y-2'>
          {/* Threads Zone */}
          <div className='h-auto w-full bg-gray-50 rounded-lg flex flex-col items-start justify-start py-8 px-5 '>
            {/* Header */}
            <div className='h-auto w-full flex flex-col items-start justify-start pb-3 pl-2 space-y-3'>
              <h3 className='text-lg font-medium text-gray-900'>AUTOSICK COMMUNITY</h3>
              {/* row */}
              <div className='h-auto md:h-20 w-full rounded-lg bg-white flex flex-col md:flex-row py-4 items-start md:items-center justify-between px-6 space-y-5 md:space-y-0'>
                <div className='h-auto w-1/2 flex items-center justify-start'>
                  <h3 className='font-medium text-md'>Topic</h3>
                </div>
                <div className='h-auto w-full md:w-1/2 grid grid-cols-3 gap-0'>
                  <span className='text-sm text-gray-500 flex items-center justify-start md:justify-center font-medium'>REPLIES</span>
                  <span className='text-sm text-gray-500 flex items-center justify-center font-medium'>VIEWS</span>
                  <span className='text-sm text-gray-500 flex items-center justify-center font-medium'>VOTES</span>
                </div>
              </div>
            </div>
            {/* Thread List */}
            <section className='h-auto w-full flex flex-col items-center justify-center space-y-10 mt-6'>
                {
                  threads && threads.map((thread, idx) => {
                    return (
                      <ThreadBlock key={idx} cb={setCurrentThread} />
                    )
                  })
                }
            </section>
          </div>
        </div>
        
        {/* Right */}
        <div className={`${showStatisticsPanel ? 'h-full w-full flex position fixed left-0 top-0 bottom-0 z-50 bg-white py-10' : 'h-full w-1/4 hideOnMobile'} flex-col items-start justify-start space-y-2 overflow-x-hidden overflow-y-auto`}>
           {/* Close */}
           <div 
            className='hideOnDesktop position absolute top-5 right-5 text-red-500' 
            onClick={toggleShowStatisticsPanel}>Close</div>

          {/* User Notice */}
          <div className='h-auto w-11/12 mx-auto md:w-full bg-gray-50 rounded-lg flex items-center justify-center p-3'>
            <p className='p-3 text-center font-normal text-lg leading-snug'>
              Welcome Michael, your last visit was 12 days ago. Since then there were <span className='text-blue-300'>502 new posts</span> and <span className='text-blue-300'>14 new threads</span>.
            </p>
          </div>

          {/* Forum Statistics */}
          <div className='h-auto w-11/12 mx-auto md:w-full bg-gray-50 rounded-lg flex flex-col items-start justify-start py-5 px-5 '>
            {/* Block */}
            <div className='h-auto w-full flex items-center justify-start pb-3 border-b border-gray-200 pl-2 space-x-3'>
              <FiPieChart className='la la-chart-pie text-xl text-black' />
              <h3 className='text-lg font-bold'>Forum Stats</h3>
            </div>
             {/* Block */}
             <div className='h-auto w-full flex items-center justify-between py-3 border-b border-gray-200 pl-2'>
              <h3 className='text-md font-medium'>Threads</h3>
              <h3 className='text-md font-normal text-gray-500'>4,7658</h3>
            </div>
             {/* Block */}
             <div className='h-auto w-full flex items-center justify-between py-3 border-b border-gray-200 pl-2'>
              <h3 className='text-md font-medium'>Messages</h3>
              <h3 className='text-md font-normal text-gray-500'>24,520</h3>
            </div>
             {/* Block */}
             <div className='h-auto w-full flex items-center justify-between py-3 border-b border-gray-200 pl-2'>
              <h3 className='text-md font-medium'>Members</h3>
              <h3 className='text-md font-normal text-gray-500'>12,391</h3>
            </div>
            {/* cta */}
            <button 
            onClick={toggleCreatingThread}
            className='bg-green-100 text-green-500 font-medium text-md flex items-center justify-center rounded-lg h-12 w-full mt-5'>+ Start new Thread</button>
          </div>

          {/* Trending Threads */}
          <div className='h-auto w-11/12 mx-auto md:w-full bg-gray-50 rounded-lg flex flex-col items-start justify-start py-5 px-5 '>
            {/* Block */}
            <div className='h-auto w-full flex items-center justify-start pb-3 border-b border-gray-200 pl-2 space-x-3'>
              <FiZap className='la la-chart-pie text-xl text-yellow-500' />
              <h3 className='text-lg font-bold'>Trending Threads</h3>
            </div>
             {/* Block */}
              <div className='py-5 border-b border-gray-200 pl-2 flex flex-col items-start justify-center space-y-3'>
                <div 
                className='h-auto w-full flex items-center justify-between'>
                  <div className='flex items-center justify-start space-x-3'>
                    <div className='h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden position relative'>
                      <Image src={"/assets/images/teams/default.jpg"} alt="" fill />
                    </div>
                    <h3 className='text-md font-medium text-gray-500'>Barbara Smith</h3>
                  </div>
                  <h3 className='text-md font-normal text-gray-500'>30 mins ago</h3>
                </div>
                <div className='h-auto w-full flex items-center justify-start'>
                  <h3 className='w-9/12 text-md font-medium'>How to choose a modern business car in 2023?</h3>
                </div>
              </div>
              {/* Block */}
              <div className='py-5 border-b border-gray-200 pl-2 flex flex-col items-start justify-center space-y-3'>
                <div 
                className='h-auto w-full flex items-center justify-between'>
                  <div className='flex items-center justify-start space-x-3'>
                    <div className='h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden position relative'>
                      <Image src={"/assets/images/teams/default.jpg"} alt="" fill />
                    </div>
                    <h3 className='text-md font-medium text-gray-500'>Barbara Smith</h3>
                  </div>
                  <h3 className='text-md font-normal text-gray-500'>30 mins ago</h3>
                </div>
                <div className='h-auto w-full flex items-center justify-start'>
                  <h3 className='w-9/12 text-md font-medium'>How to choose a modern business car in 2023?</h3>
                </div>
              </div>
              {/* Block */}
              <div className='py-5 border-b border-gray-200 pl-2 flex flex-col items-start justify-center space-y-3'>
                <div 
                className='h-auto w-full flex items-center justify-between'>
                  <div className='flex items-center justify-start space-x-3'>
                    <div className='h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden position relative'>
                      <Image src={"/assets/images/teams/default.jpg"} alt="" fill />
                    </div>
                    <h3 className='text-md font-medium text-gray-500'>Barbara Smith</h3>
                  </div>
                  <h3 className='text-md font-normal text-gray-500'>30 mins ago</h3>
                </div>
                <div className='h-auto w-full flex items-center justify-start'>
                  <h3 className='w-9/12 text-md font-medium'>How to choose a modern business car in 2023?</h3>
                </div>
              </div>          
          </div>
        </div>
      </section>

      {/* Decorative widgets for forum panels on mobile */}
      <section>
        {/* Categories */}
        <div 
        onClick={toggleShowCategoryPanel}
        className='h-12 w-12 rounded-r-full bg-red-500 position fixed left-0 top-1/2 flex items-center justify-center cursor-pointer hideOnDesktop'>
          <FiGrid className='la la-chart-pie text-xl text-white' />
        </div>
        {/* Right Group of panels */}
        <div
        onClick={toggleShowStatisticsPanel}
        className='h-12 w-12 rounded-l-full bg-blue-500 position fixed right-0 top-1/2 flex items-center justify-center cursor-pointer hideOnDesktop'>
          <FiPieChart className='la la-chart-pie text-xl text-white' />
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Dialogs */}
      { isCreatingThread ? (<ForumThreadDialog cb={toggleCreatingThread} />) : null }
    </div>
  )
}

export default ForumIndex;