import { AutoFocus } from "@cloudinary/base/qualifiers/autoFocus";
import { FocusOn } from "@cloudinary/base/qualifiers/focusOn";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill, fit } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { Gravity } from "@cloudinary/url-gen/qualifiers";

const cld = new Cloudinary({
  cloud: {
    cloudName: 'dphsascmy',
  },
});

export const churchLandingVideo = cld.video('Church_Landing_Video').quality('auto').format('auto').resize(fill());
