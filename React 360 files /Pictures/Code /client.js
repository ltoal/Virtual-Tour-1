
import {ReactInstance} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  r360.renderToSurface(
    r360.createRoot('Slideshow', {
      photos: [
        {uri: './static_assets/aud.png', title: 'IHHS Auditorium', format: '2D'},
        {uri: './static_assets/field.png', title: 'IH Field', format: '2D'},
      ],
    }),
    r360.getDefaultSurface(),
  );
}

window.React360 = {init};

 

 