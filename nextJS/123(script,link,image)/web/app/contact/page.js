import React from 'react'
import Script from 'next/script'

const contact = () => {
  return (
    <div>
      <Script>
        {`
        alert("weilcome to contact page ")`}
      </Script>
      {/* <script>
       { `alert("hiii")`}
      </script> */}
      I am contact
    </div>
  )
}

export default contact
export const metadata = {
  title: "Facebook contact: connect with all",
  description: "easy connect",
};

