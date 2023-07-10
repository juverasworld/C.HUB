import axios from 'axios'
export default function Sample() {
    return (
        <section>
            <form action=""><button onClick={async (e) => {
                e.preventDefault();
                // const response = await fetch("/api/sample", {
                //     method: "POST",
                //     body: JSON.stringify({}),
                //     headers: {
                //         contentType: "application/json",
                //         Accept: "application/json",
                //         authorization: "Bearer  hhfjfffjfkgkktkhy==",
                //     },
                //     mode: 'cors',
                // });
                // const data = await response.json();
                // console.log(data);
              const response = await  axios.post("/api/sample", {}, {});
              console.log(response)
            }}>Hello world</button></form>
        </section>
    )
}