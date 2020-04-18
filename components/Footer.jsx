const Footer = () => {
  return (
    <footer id="kapcsolat">
      <div className="contact">
        <ul id="reachout">
          <li>
            <a href="https://www.google.com/maps/place/Bibic+vend%C3%A9gh%C3%A1zak/@46.394617,17.505221,17z/data=!4m10!1m2!3m1!2zQmliaWMgdmVuZMOpZ2jDoXphaw!3m6!1s0x0:0x56f9f832e3ba7da3!5m1!1s2018-06-17!8m2!3d46.3948508!4d17.5067407" rel="noopener noreferrer" target="_blank" ><span>7561 Nagybajom, Iskolaköz 3-5.</span>
              <img alt="" src="/icons/map.svg"/>
            </a>
          </li>
          <li>
            <a href="mailto:info&#64;bibicvendeghazak.hu"><span>info kukac bibicvendeghazak pont hu</span>
              <img alt="" src="/icons/mail.svg"/>
            </a>
          </li>
          <li>
            <a href="tel:+36305785730"><span>+36 30 578 5730</span>
              <img alt="" src="/icons/tel-brown.svg"/>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/Bíbic-Vendegházak-És-Söröző-200199203718517" rel="noopener noreferrer" target="_blank" >
              <img alt="" src="/icons/facebook.svg"/>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/explore/tags/bibicvendeghaz/" rel="noopener noreferrer" target="_blank" >
              <img alt="" src="/icons/instagram.svg"/>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/user/hegpeter100" rel="noopener noreferrer" target="_blank" >
              <img alt="" src="/icons/youtube-brown.svg"/>
            </a>
          </li>
        </ul>
      </div>
      <div id="copyright">
        <h4> © Minden jog fenntartva.</h4>
        {/* TODO: Background and foreground colors do not have a sufficient contrast ratio.*/}
        <h4>
          Képek & Design :  <a href="https://www.facebook.com/gergo.boos" rel="noopener noreferrer" target="_blank" >Boós Gergő</a>
        </h4>
        <h4>
          Weblap & Design : <a href="https://balazsorban.com" rel="noopener noreferrer" target="_blank" >Orbán Balázs</a>
        </h4>
        <h6>verziószám: %REACT_APP_VERSION%</h6>
      </div>
    </footer>
  )
}

export default Footer