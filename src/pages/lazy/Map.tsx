import './Map.scss';

export default function Map() {
  return (
    <>
      <a
        href='https://map.kakao.com/?urlX=509766&urlY=1107177&urlLevel=2&map_type=TYPE_MAP&map_hybrid=false'
        target='_blank'
      >
        <img
          className='mapImg'
          width='504'
          height='310'
          src='https://map2.daum.net/map/mapservice?FORMAT=PNG&SCALE=1.25&MX=509766&MY=1107177&S=0&IW=504&IH=310&LANG=0&COORDSTM=WCONGNAMUL&logo=kakao_logo'
        />
      </a>
      <div className='hide'>
        <strong>
          <img
            src='//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png'
            width='72'
            height='16'
            alt='카카오맵'
          />
        </strong>
        <div>
          <a
            target='_blank'
            href='https://map.kakao.com/?urlX=509766&urlY=1107177&urlLevel=2&map_type=TYPE_MAP&map_hybrid=false'
          >
            지도 크게 보기
          </a>
        </div>
      </div>
    </>
  );
}
