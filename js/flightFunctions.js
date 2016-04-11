var gObj;

function ProcessAPICall (aSource, aRequest, aTestMode) {
    var vTrips;

    switch (aSource) {
        case 'Google':
            if (aTestMode == 1) {
                vTrips = TestReturn.trips;
                parseTripOptions(vTrips, aSource);
            }
            else {

                var APIKey = 'AIzaSyB_ZIWY2gnzH91fzrj8tCXJ9-UgYuGxeCg';

                $.ajax({
                       type: 'POST',
                       url: 'https://www.googleapis.com/qpxExpress/v1/trips/search?key=' + APIKey,
                       contentType: 'application/json',
                       dataType: 'json',
                       data: JSON.stringify(aRequest),
                       success: function (data) {
                            vTrips = data.trips;
                            parseTripOptions(vTrips, aSource);
                       },
                       error: function (xhr, textStatus, errorThrown) {
                           console.log(xhr + " : " + textStatus + " : " + errorThrown);
                       }
                });
            };
        break; // end Google
    };
};

function parseTripOptions (aTrips, aSource) {

            var vOption;
            var vOutput;

            var flightCount = aTrips.tripOption.length;

            for (var i = 0; i <= flightCount - 1; i++ ) {
                vOption = aTrips.tripOption[i];
                vOutput = 'Solution#   ' + (i + 1);
                vOutput = vOutput + parseFlight(vOption,aSource);
               // console.log(vOption);
                console.log(vOutput);
            };

};

function parseFlight (aFlight, aSource) {
    var vOutput;

    switch (aSource) {
        case 'Google':
            vOutput =  '   Sale Price: $' + aFlight.saleTotal.substring(3,aFlight.saleTotal.length);

            for (var i = 0; i <= aFlight.slice.length - 1; i++ ) {
                vOutput = vOutput + '\n\tSlice ' + (i + 1) + parseSegment(aFlight.slice[i], aSource);
            };

        break; // end Google
    }
    return vOutput;
};

function parseSegment (aSegment, aSource) {
    var vOutput;
    var vConnections;
    var vConnectionDuration;
    var vSameFlight;

    switch (aSource) {
        case 'Google':
            vOutput = '\t Total Duration: ' + convertDuration(aSegment.duration,'m');

            if (aSegment.segment.length > 1) {
                vConnections = aSegment.segment.length - 1;
                vConnectionDuration = aSegment.segment[0].connectionDuration;
                vSameFlight = 0;
            }
            else if (aSegment.segment[0].leg.length > 1) {
                vConnections = aSegment.segment[0].leg.length - 1;
                vConnectionDuration = aSegment.segment[0].leg[0].connectionDuration;
                vSameFlight = 1
            }
            else {
               vConnections = 0;
               vSameFlight = 0;
            };

            vOutput = vOutput + '\t Connections: ' + vConnections ;

            if (vConnections > 0) {
                vOutput = vOutput + '\t Connection Time: ' + convertDuration(vConnectionDuration,'m');
            };

            for (var i = 0; i <= vConnections ; i++ ) {
                vOutput = vOutput + '\n\t\tLeg:' + (i + 1);
                if (vSameFlight == 1) {
                    vOutput = vOutput + ": " + parseCarrier(aSegment.segment[0].flight, aSource);
                    vOutput = vOutput + " - " + parseLeg(aSegment.segment[0].leg[i], aSource);
                }
                else {
                    vOutput = vOutput + ": " + parseCarrier(aSegment.segment[i].flight, aSource);
                    vOutput = vOutput + " - " + parseLeg (aSegment.segment[i].leg[0], aSource);
                };
            };

        break; // end Google
    }

    return vOutput;
};

function parseLeg (aLeg, aSource) {
    var vOutput;
      switch (aSource) {
          case 'Google':
            var vDepartureDate = new Date (aLeg.departureTime);
            var vArrivalDate = new Date (aLeg.arrivalTime);
            vOutput = aLeg.origin + "(" + vDepartureDate.toLocaleDateString() + " " + vDepartureDate.toLocaleTimeString() +")";
            vOutput = vOutput + " to " + aLeg.destination + "(" + vArrivalDate.toLocaleDateString() + " " + vArrivalDate.toLocaleTimeString() + ")";;
          break; // end Google
      };
    return vOutput;
};

function parseCarrier (aFlight, aSource) {
    var vOutput;
      switch (aSource) {
          case 'Google':
                vOutput = aFlight.carrier + aFlight.number;
          break; // end Google
      };
    return vOutput;
};

function convertDuration (aDuration, aUnits) {
    var vOutput;
        switch (aUnits) {
            case 'm':
                vOutput = parseInt(aDuration / 60 ) % 24  + 'h ';
                vOutput = vOutput + (aDuration - (parseInt(aDuration / 60 ) % 24 ) * 60) + 'm';
            break; // end minutes
        };

    return vOutput;
};