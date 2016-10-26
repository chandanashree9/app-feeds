(
    function () {
    
        function datePickerFn(){
            return{
                restrict:"A",
                link:function(scope,element,attrs){
                    var mindate= attrs["mindate"];
                    var maxdate=attrs["maxdate"];
                    var noofmonths = parseInt(attrs["noofmonths"]);
                    var dateObj = {dateFormat: 'yy-mm-dd'};
                    if(mindate){
                        dateObj.minDate=mindate;
                    }
                    if(maxdate){
                        dateObj.maxDate=maxdate;
                    }
                    if(noofmonths){
                        dateObj.numberOfMonths=noofmonths;
                    }

                    element.datepicker(dateObj);
                }
            }
        }

       angular.module('feeds').directive('customDatePicker',[datePickerFn]);
    }
)();

