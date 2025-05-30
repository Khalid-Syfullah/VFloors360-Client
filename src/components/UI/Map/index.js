import React, { useEffect } from "react";
import { MapWrapper, MapPoint, MapPoints } from "./style";
import { useLocation, Link } from "react-router-dom";
import { Tooltip } from '@mui/material';
import { withStyles } from '@mui/styles';

const mapPoints = [
  {
    path: "/room-1",
    name: "Room 1",
    topOffset: 44,
    leftOffset: 65,
    isActive: true
  },
  {
    path: "/hall",
    name: "Hall",
    topOffset: 70,
    leftOffset: 110,
    isActive: true
  }
];

const CustomTooltip = withStyles((theme) => ({
  tooltip: {
    fontSize: theme.typography.pxToRem(16)
  }
}))(Tooltip);

export default function Map() {
  const location = useLocation();
  const currentPath = location.pathname;
  const forceUpdate = () => {
    setTimeout(() => {
      window.location.reload();
    }, 10);
  };

  return (
    <MapWrapper>
      <div className='map-content'>
        <svg
          width='173'
          height='188'
          viewBox='0 0 173 188'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M-8.17077e-06 0.980621L172.077 0.980614L172.077 187.906L85.1213 187.906L85.1213 184.369L91.0816 184.369L91.0816 163.186L94.077 163.186L94.077 184.204L167.358 184.204L167.358 146.059L94.188 146.059L94.1678 148.502L91.2062 148.502L91.2062 142L94.1914 142L94.2082 144.154L167.399 144.154L167.399 99.6313L94.1645 99.6313L94.1645 127.663L91.1691 127.663L91.1691 99.5169L82.0822 99.5169L82.0822 96.4543C84.5559 96.4543 89.5537 96.4173 89.5537 96.4173L91.2062 96.4173L91.1725 95.1451L94.1544 95.1451L94.1813 96.3937L167.392 96.3937L167.392 5.68226L94.1813 5.68226L94.1813 76.1937L91.1321 76.1937L91.1321 72.9695L88.1772 72.9695L88.1772 71.2868L90.984 71.2868L90.984 5.70582L46.7541 5.70582L46.7541 71.169L74.8362 71.169L74.8362 72.8686L46.6329 72.8686L46.5791 74.0128L44.9939 74.0128L44.9939 5.69238L3.02898 5.69238L3.02898 71.1622L26.8536 71.1622L26.8536 72.8618L3.02898 72.8618L3.02898 96.4375L29.048 96.4375L29.048 99.4294L3.05254 99.4294L3.05254 127.326L51.624 127.326L51.624 99.5876L43.4155 99.5876L43.4155 96.5822L44.9603 96.5485L44.9603 88.7573L46.643 88.7337L46.643 96.4375L55.6223 96.4375L55.6223 99.5439L53.7544 99.5708L53.7544 142.791L51.7351 142.791L51.7351 129.198L3.02898 129.198L3.02899 156.607L51.6274 156.607L51.6274 155.506L53.6467 155.466L53.6467 159.992L51.6611 159.992L51.6274 158.501L3.02899 158.501L3.02899 184.177L51.6712 184.177L51.6711 172.29L53.7107 172.29L53.7107 184.268L69.4614 184.268L69.4614 187.883L-1.02979e-09 187.883L-8.17077e-06 0.980621Z'
            fill='#7D7D7D'
          />
        </svg>
        <MapPoints>
          {mapPoints.map(({ topOffset, leftOffset, name, isActive, path }, i) =>
            currentPath !== path ? (
              <Link to={path} onClick={() => forceUpdate()} key={i}>
                <CustomTooltip title={name} arrow>
                  <MapPoint
                    topOffset={topOffset}
                    leftOffset={leftOffset}
                    active={currentPath === path}
                  ></MapPoint>
                </CustomTooltip>
              </Link>
            ) : (
              <CustomTooltip title={name} arrow>
                <MapPoint
                  topOffset={topOffset}
                  leftOffset={leftOffset}
                  active={currentPath === path}
                ></MapPoint>
              </CustomTooltip>
            )
          )}
        </MapPoints>
      </div>
    </MapWrapper>
  );
}
