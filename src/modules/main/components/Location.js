import React from 'react'

function Location() {
  return (
<section className="container h-[600px] relative flex flex-col bg-mainBg">
  <div className="relative ">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5496.443063388982!2d30.707149722335206!3d46.46411979057255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c6322580c3132d%3A0x49b28d14d9bdbe0e!2z0KHRgtC10L_QvdCw0Y8g0YPQuy4sIDE5LCDQntC00LXRgdGB0LAsINCe0LTQtdGB0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDY1MDAw!5e0!3m2!1sru!2sua!4v1664009985299!5m2!1sru!2sua" width="100%" height="600" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <div className="container absolute bottom-0 ">
    <div className="lg:w-1/3 md:w-1/2  p-8 flex flex-col md:mr-auto w-full bg-white  relative z-10 shadow-md">
      <h2 className="text-lg mb-1 font-medium">Как нас найти:</h2>
      <p className="leading-relaxed mb-1 ">Одесса, ул. Степовая, 19</p>
      <p className="leading-relaxed mb-1 ">тел: <a href="tel:+38 098 297 84 01">+38 098 297 84 01</a></p>
      <p className="leading-relaxed mb-1 ">e-mail:<a href="mailto:bfhuvfs@jbjhh.up">bfhuvfs@jbjhh.up</a></p>
    </div>
  </div>
</section>
  )
}

export default Location