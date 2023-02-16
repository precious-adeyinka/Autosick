import React, {useState} from 'react'

// icons
import { FiChevronDown } from "react-icons/fi";

interface ThreadCategoryI {
    cb: React.Dispatch<React.SetStateAction<categoryI>>;
    feedback: React.Dispatch<React.SetStateAction<String>>
}

interface categoryI {
    label: String;
    sub_cats: Array<String>;
}  

const ThreadCategory: React.FC<ThreadCategoryI> = ({ cb, feedback }) => {
    const [changeMode, setChangeMode] = useState<boolean>(false);
    const toggleMode = () => setChangeMode(prev => !prev)

    const [isShowing, setIsShowing] = useState<boolean>(false);
    const toggleShowing = () => setIsShowing(prev => !prev)

    const [label, setLabel] = useState<String>('Category');

    const handleClick = (val: categoryI) => {
        setLabel(val.label)
        toggleShowing()
        cb(val)
        feedback(val.label)
    }
    
    const [categories, setCategories] = useState<categoryI[]>([
        {
          label: 'Car Economy', 
          sub_cats: ['Item 1', 'Item 2', 'Item 3']
        }, 
        {
          label: 'Car Parking', 
          sub_cats: ['Item 3', 'Item 2', 'Item 1']
        }, 
        {
          label: 'Car Health', 
          sub_cats: ['Item 2', 'Item 3', 'Item 1']
        }, 
        {
          label: 'Car Tricks and Tips', 
          sub_cats: ['Item 0', 'Item 3', 'Item 2']
        }, 
    ]);

    return (
        <div 
        className='h-12 w-full border border-gray-200 flex flex-col items-start justify-center position relative'>
           <div className='h-full w-full'>
                {
                    changeMode ? (<div className='h-full w-full'>
                        <input type="text" placeholder='Set Custom Category' className='h-full w-full focus:outline-none px-4 text-md' />
                    </div>) : (
                        <div className='h-full w-full flex flex-col items-start justify-start'>
                            {/* label */}
                            <div 
                            onClick={toggleShowing}
                            className='h-full w-full flex items-center justify-between px-3 cursor-pointer'>
                                <span className='text-sm text-gray-500'>{label}</span>
                                <FiChevronDown className={`la la-chart-pie text-lg text-gray-500 transition duration-300 ${ isShowing ? 'transform -rotate-180' : 'transform rotate-270'}`} />
                            </div>
                            {/* dropdown */}
                            {
                                isShowing ? (
                                    <div className='h-auto max-h-32 w-full bg-white flex flex-col items-start justify-start space-y-1 position absolute top-full z-50 shadow overflow-y-auto'>
                                    {
                                        categories && categories.map((category, id) => {
                                            return (
                                                <div 
                                                key={id}
                                                onClick={() => handleClick(category)}
                                                className='w-full cursor-pointer text-md text-gray-500 px-3 py-2 hover:bg-gray-50'>{category.label}</div>
                                            )
                                        })
                                    }
                                    <div 
                                    onClick={toggleMode}
                                    className='w-full cursor-pointer text-md text-gray-500 px-3 py-2 hover:bg-gray-50'>Other</div>
                                    </div>
                                ) : null
                            }
                        </div>
                    )
                }
           </div>
        </div>
    )
}

export default ThreadCategory