import React, {useEffect, useState} from 'react';

const DeBounceComponent = () => {
    const [value, setValue] = useState('')
    const debouncedValue = useDebounce (value, 250)
    function useDebounce (value, delay = 250) {
        const [debouncedValue, setDebouncedValue] = useState(value)
        useEffect(
            () => {
                const timeout = setTimeout(() => {
                    setDebouncedValue(value)
                    fetch(`http://localhost/api/query${debouncedValue}`)
                },delay)
                return () => {
                    clearTimeout(timeout)
                }
            },[value]
        )
        return debouncedValue
    }


    return (
        <div className={'w-full p-[25px] flex gap-[20px] flex-col'}>
            <h5 className={'text-white text-[16px]'}>DeBounce Tactic</h5>
            <input className={'h-10 outline-none bg-zinc-200 px-4 rounded-md'}  onChange={e => setValue(e.target.value)}type="text"/>
            <p className={'text-white'}> {debouncedValue}</p>
        </div>
    );
};

export default DeBounceComponent;
