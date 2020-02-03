---
path: /tripsspeccalendardates/
lang: en
---
### Trips.txt (required file)

|  Field Name | Type | Required | Description |
|  ------ | ------ | ------ | ------ |
|  `route_id` | ID referencing `routes.route_id` | **Required** | Identifies a route. |
|  `trip_id` | ID | **Required** | Identifies a trip. |
|  `service_id` | ID referencing `calendar_dates.service_id` | **Required** | Identifies a set of dates when service is available for one or more routes. |
|  `trip_headsign` | Text | Optional | Text that appears on signage identifying the trip's destination to riders. Use this field to distinguish between different patterns of service on the same route. If the headsign changes during a trip, `trip_headsign` can be overridden by specifying values for the `stop_times.stop_headsign`. |
|  `trip_short_name` | Text | Optional | Public facing text used to identify the trip to riders, for instance, to identify train numbers for commuter rail trips. If riders do not commonly rely on trip names, leave this field empty.  A `trip_short_name` value, if provided, should uniquely identify a trip within a service day; it should not be used for destination names or limited/express designations. |
|  `direction_id` | Enum | Optional | Indicates the direction of travel for a trip. This field is not used in routing; it provides a way to separate trips by direction when publishing time tables. Valid options are: <br><br>`0` - Travel in one direction (e.g. outbound travel).<br>`1` - Travel in the opposite direction (e.g. inbound travel).<hr>*Example: The `trip_headsign` and `direction_id` fields could be used together to assign a name to travel in each direction for a set of trips. A [trips.txt](#tripstxt) file could contain these records for use in time tables:* <br> `trip_id,...,trip_headsign,direction_id` <br> `1234,...,Airport,0` <br> `1505,...,Downtown,1` |
|  `block_id` | ID | Optional | Identifies the block to which the trip belongs. A block consists of a single trip or many sequential trips made using the same vehicle, defined by shared service days and `block_id`. A `block_id` can have trips with different service days, making distinct blocks. See the [example below](#example-blocks-and-service-day) |
|  `shape_id` | ID referencing `shapes.shape_id` | Optional | Identifies a geospatial shape describing the vehicle travel path for a trip. |
|  `wheelchair_accessible` | Enum | Optional | Indicates wheelchair accessibility. Valid options are:<br><br>`0` or empty - No accessibility information for the trip.<br>`1` - Vehicle being used on this particular trip can accommodate at least one rider in a wheelchair.<br>`2` - No riders in wheelchairs can be accommodated on this trip. |
|  `bikes_allowed` | Enum | Optional | Indicates whether bikes are allowed. Valid options are:<br><br>`0` or empty - No bike information for the trip.<br>`1` - Vehicle being used on this particular trip can accommodate at least one bicycle.<br>`2` - No bicycles are allowed on this trip. |
