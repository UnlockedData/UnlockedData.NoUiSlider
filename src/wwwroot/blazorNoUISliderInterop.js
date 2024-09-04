function addNoUiSlider(options, element, dotNetRef) {

    noUiSlider.create(element, options)
    element.noUiSlider.dotNetRef = dotNetRef;


    element.noUiSlider.on('end', function (values, handle, unencoded, tap, positions, noUiSlider) {
        invokeDotnetMethod(noUiSlider,"SliderEnd", unencoded, handle);

    });
    element.noUiSlider.on('update', function (values, handle, unencoded, tap, positions, noUiSlider) {
        invokeDotnetMethod(noUiSlider,"SliderUpdate", unencoded, handle);

    });
    element.noUiSlider.on('set', function (values, handle, unencoded, tap, positions, noUiSlider) {
        invokeDotnetMethod(noUiSlider,"SliderSet", unencoded, handle);

    });
    element.noUiSlider.on('change', function (values, handle, unencoded, tap, positions, noUiSlider) {
        invokeDotnetMethod(noUiSlider,"SliderChange", unencoded, handle);

    });
    element.noUiSlider.on('start', function (values, handle, unencoded, tap, positions, noUiSlider) {
        invokeDotnetMethod(noUiSlider,"SliderStart", unencoded, handle);

    });
    element.noUiSlider.on('slide', function (values, handle, unencoded, tap, positions, noUiSlider) {
        invokeDotnetMethod(noUiSlider,"SliderSlide", unencoded, handle);

    });
};

function invokeDotnetMethod(noUiSlider,methodName, value, handle) {
    console.log("invokeDotnetMethod");
    if (Array.isArray(value)) {
        value.forEach(function (item, index) {
            value[index] = parseInt(item);
        });
    } else {
        value = parseInt(value);
    }

    noUiSlider.dotNetRef.invokeMethodAsync(methodName, value, handle);
}

function updateNoUiSlider(option, element, dotNetRef) {
    //assume two handled for now, update for multi as needed
    //no ui can't update the start and end

    if (element.noUiSlider.options.start[0] != option.start[0] || element.noUiSlider.options.start[1] != option.start[1]) {
        element.noUiSlider.destroy();
        addNoUiSlider(option, element, dotNetRef);

    }




}