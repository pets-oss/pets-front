import { RefObject, useCallback, useEffect, useState } from 'react';

export default function useResize<T extends HTMLElement>(ref: RefObject<T>) {
    const getDimensions = useCallback(
        () => ({
            width: ref.current?.offsetWidth || 0,
            height: ref.current?.offsetHeight || 0,
        }),
        [ref]
    );

    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const handleResize = () => {
            setDimensions(getDimensions());
        };

        if (ref.current) {
            setDimensions(getDimensions());
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [ref, getDimensions]);

    return dimensions;
}
