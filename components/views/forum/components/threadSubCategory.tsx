import React, {useState, useEffect} from 'react'

// icons
import { FiChevronDown } from "react-icons/fi";

interface ThreadSubCategoryI {
    data: categoryI;
    cb: React.Dispatch<React.SetStateAction<String>>;
}

interface categoryI {
    label: String;
    sub_cats: Array<String>;
}  

const ThreadSubCategory: React.FC<ThreadSubCategoryI> = ({ data, cb }) => {
    const [changeMode, setChangeMode] = useState<boolean>(false);
    const toggleMode = () => setChangeMode(prev => !prev)

    const [isShowing, setIsShowing] = useState<boolean>(false);
    const toggleShowing = () => setIsShowing(prev => !prev)

    const [label, setLabel] = useState<String>('Sub Category');

    const handleClick = (val: String) => {
        setLabel(val)
        toggleShowing()
        cb(val)
    }
    
    const [categories, setCategories] = useState<String[]>([]);

    useEffect(() => {
        setCategories(data.sub_cats)
    }, [data])


    return (
        <div 
        className='h-12 w-full border border-gray-200 flex flex-col items-start justify-center position relative'>
           <div className='h-full w-full'>
                {
                    changeMode ? (<div className='h-full w-full'>
                        <input type="text" placeholder='Set Custom Sub Category' className='h-full w-full focus:outline-none px-4 text-md' />
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
                                                className='w-full cursor-pointer text-md text-gray-500 px-3 py-2 hover:bg-gray-50'>{category}</div>
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

export default ThreadSubCategory