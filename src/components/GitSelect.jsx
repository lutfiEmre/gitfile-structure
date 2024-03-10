import React, {useState} from 'react';

const GitSelect = () => {
    const [data,setData] = useState([
        "app",
        "controllers",
        ''
    ])
    const value = data.at(-1)

    const changeHandle = (e) => {
        if (e.target.value.includes('/')){
            setData(names => [
                ...names,
                ''
            ])
        }else{
            setData(names => [
                ...names.slice(0, -1),
                e.target.value
            ])
        }
    }
    const keyDownHandle = (e) => {
        if (e.key === 'Enter'){
            setData(names => [
                ...names,
                ''
            ])
        }
        if (e.key === 'Backspace' && !e.target.value){
            e.preventDefault()
            setData(data => data.slice(0, -1))
        }

    }
    return (
        <div className={'w-full text-white h-screen py-[50px] px-[100px] bg-gray-800'}>
            <div className={'flex flex-row gap-2'}>
                {data.slice(0, -1).map((name,index) => (
                    <>
                        <button key={index} className={'text-blue-500 hover:underline'}>
                            {name}
                        </button>
                        <div className={'text-zinc-500'}>/</div>
                    </>
                ))}
                <input onKeyDown={keyDownHandle} value={value} onChange={changeHandle} className={'border border-zinc-700 rounded w-[200px] px-1.5 bg-transparent outline-none active:outline-none text-white'} type="text"/>
            </div>
            <pre className={'mt-[50px]'}>{JSON.stringify(data,null,2)}</pre>
        </div>

    );
};

export default GitSelect;
