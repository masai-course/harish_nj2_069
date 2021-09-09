import { useState } from 'react';

function Loading() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    //   if (loading)
    //     {
    //   return (
    //     <div>
    //       Loading...
    //       <button onClick={() => { setLoading(false); setError(false); }}>
    //       Loading done
    //       </button>
    //     </div>
    //   );
    // }
    // if (error)
    // {
    //   return <div>Something went wrong</div>;
    // }
    // return <div>Here's your data: 1234</div>;
    // }
    


    // Better way (short Way)

    return loading ? (
        <div>
            Loading...
            <button onClick={() => { setLoading(false); setError(true); }}>
                Loading done
            </button>
        </div>
    )
        : error ? (
            <div>Something went wrong</div>
        ) : (
            <div>Here's your data: 1234</div>
        );
}
export { Loading };

