import React, {useState, useEffect} from 'react'
import ThreadCategory from './threadCategory';
import ThreadSubCategory from './threadSubCategory';

interface ForumThreadDialogI {
    cb: () => void;
}

interface categoryI {
    label: String;
    sub_cats: Array<String>;
}  

const ForumThreadDialog: React.FC<ForumThreadDialogI> = ({ cb }) => {
    // form data
    const [title, setTitle] = useState<string | number | readonly string[] | undefined>('')
    const [body, setBody] = useState<string | number | readonly string[] | undefined>('')
    const [category, setCategory] = useState<String>('')
    const [subCategory, setSubCategory] = useState<String>('')

    const handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined = (e) => {
        e.preventDefault();
        const newData = {
            title,
            body,
            category,
            subCategory
        }
        console.log(newData)
    }

    const [currentCategory, setCurrentCategory] = useState<categoryI>({
        label: '',
        sub_cats: []
    });

    const [dialog, setDialog] = useState<boolean>(false);
    const toggleDialog = () => {
        setDialog(prev => !prev);
        cb()
    }

    return (
        <div className='h-screen w-full overflow-hidden bg-black/90 position fixed top-0 left-0 z-50 flex items-center justify-center'>
            {/* Board */}
            <div className='h-[38rem] md:h-[35rem] w-11/12 md:w-1/2 bg-white rounded-2xl position relative px-5 md:px-10 py-10 overflow-x-hidden overflow-y-auto'>
                {/* close */}
                <div 
                onClick={toggleDialog}
                className='text-sm text-red-500 cursor-pointer pointer absolute top-8 right-8'>X close</div>

                {/* Header */}
                <div className='h-auto w-full flex items-center justify-start'>
                    <h2 className='font-medium'>Create New Thread</h2>
                </div>

                {/* Form */}
                <form 
                onSubmit={handleSubmit}
                className="h-auto w-full mt-8 flex flex-col items-start justify-start space-y-3">
                    {/* Title */}
                    <div className='h-12 w-full flex items-center justify-start space-x-5'>
                        {/* <label htmlFor="" className='font-medium text-sm text-black'>Title</label> */}
                        <input 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        type="text" 
                        placeholder='Thread Title' 
                        className='h-full w-full focus:outline-none px-3 border border-gray-200 text-md' />
                    </div>
                    {/* Content */}
                    <div className='h-auto w-full flex items-start justify-start space-x-5'>
                        {/* <label htmlFor="" className='font-medium text-sm text-black'>Body</label> */}
                        <textarea 
                        value={body}
                        onChange={(e) => setBody(e.target.value)} 
                        defaultValue={"Thread Content"} 
                        className='h-44 w-full border border-gray-200 focus:outline-none p-3 text-md text-gray-400 font-normal'></textarea>
                    </div>
                    {/* Category */}
                    <ThreadCategory cb={setCurrentCategory} feedback={setCategory} />
                    {/* Sub Category */}
                    <ThreadSubCategory cb={setSubCategory} data={currentCategory} />
                    {/* cta */}
                    <button className='h-12 w-full bg-green-500 text-white text-md flex items-center justify-center font-medium'>Create</button>
                </form>
            </div>
        </div>
    )
}

export default ForumThreadDialog