function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  let numberoftruth = 0;
  let okk = false;
  let form = document.querySelector("#form-form");
  let latit = form.Latitude.value;
  let longit = form.Longitude.value;

  if (latit >= -90 && latit <= 90) {
    numberoftruth++;

    let spanlat = document.querySelector("#lat-span");
    while (spanlat.hasChildNodes()) {
      spanlat.removeChild(spanlat.firstChild);
    }
    let tex = document.createTextNode("*");
    spanlat.appendChild(tex);
  } else {
    let spanlat = document.querySelector("#lat-span");
    while (spanlat.hasChildNodes()) {
      spanlat.removeChild(spanlat.firstChild);
    }
    let tex = document.createTextNode("* must be a valid Latitude (-90 to 90)");
    spanlat.appendChild(tex);
  }

  if (longit >= -180 && longit <= 180) {
    numberoftruth++;

    let spanlong = document.querySelector("#long-span");
    while (spanlong.hasChildNodes()) {
      spanlong.removeChild(spanlong.firstChild);
    }
    let tex = document.createTextNode("*");
    spanlong.appendChild(tex);
  } else {
    let spanlong = document.querySelector("#long-span");
    while (spanlong.hasChildNodes()) {
      spanlong.removeChild(spanlong.firstChild);
    }
    let tex = document.createTextNode(
      "* must be a valid Longitude (-180 to 180)"
    );
    spanlong.appendChild(tex);
  }

  if (numberoftruth == 2) {
    okk = true;
  }
  return okk;
  //console.log('TODO - validate the longitude, latitude values before submitting');
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
