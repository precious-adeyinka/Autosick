import React, {useState, useEffect} from 'react'

interface forumCategoryBlockI {
    label: String;
    sub_cats: String[];
    cb: (s: String) => void;
}

const ForumCategoryBlock: React.FC<forumCategoryBlockI> = ({ label, sub_cats, cb }) => {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const handleClick = () => {
        setIsClicked(prev => !prev)
        cb(label)
    }
    const handleSubClick = (val: String) => {
        const res = `${label}/${val}`
        console.log(res)
        cb(res)
    }

    return (
        <div className='h-auto w-full flex flex-col items-start justify-start pl-2'>
            {/* label */}
            <div 
            onClick={handleClick}
            className='flex items-center justify-start space-x-3 cursor-pointer'>
                <div className={`h-5 w-5 rounded-full bg-transparent ${ isClicked ? 'border-2 border-blue-500' : 'border border-gray-400'}`}></div>
                <div className='font-normal'>{label}</div>
            </div>
            {/* subcategories - dropdown */}
            {
                isClicked ? (
                    <div className='h-auto w-full flex flex-col items-start justify-start space-y-3 pl-8 pt-3'>
                        {
                            sub_cats && sub_cats.map((sub_cat, id) => {
                                return (
                                    <div key={id} 
                                    onClick={() => handleSubClick(sub_cat)}
                                    className='text-md text-gray-500 cursor-pointer'>{sub_cat}</div>
                                )
                            })
                        }
                    </div>
                ) : null
            }
        </div>
    )
}

export default ForumCategoryBlock