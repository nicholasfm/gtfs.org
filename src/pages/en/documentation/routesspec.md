---
path: /routesspec/
lang: en
---
|  Field Name | Type | Required | Description |
|  ------ | ------ | ------ | ------ |
|  `route_id` | ID | **Required** | Identifies a route. |
|  `agency_id` | ID referencing `agency.agency_id` | **Conditionally required** | Agency for the specified route. This field is required when the dataset provides data for routes from more than one agency in [agency.txt](#agency), otherwise it is optional.  |
|  `route_short_name` | Text | **Conditionally required** | Short name of a route. This will often be a short, abstract identifier like "32", "100X", or "Green" that riders use to identify a route, but which doesn't give any indication of what places the route serves. Either `route_short_name` or `route_long_name` must be specified, or potentially both if appropriate. |
|  `route_long_name` | Text | **Conditionally required** | Full name of a route. This name is generally more descriptive than the `route_short_name` and often includes the route's destination or stop. Either `route_short_name` or `route_long_name` must be specified, or potentially both if appropriate. |
|  `route_desc` | Text | Optional | Description of a route that provides useful, quality information. Do not simply duplicate the name of the route. <hr> _Example: "A" trains operate between Inwood-207 St, Manhattan and Far Rockaway-Mott Avenue, Queens at all times. Also from about 6AM until about midnight, additional "A" trains operate between Inwood-207 St and Lefferts Boulevard (trains typically alternate between Lefferts Blvd and Far Rockaway)._ |
|  `route_type` | Enum | **Required** | Indicates the type of transportation used on a route. Valid options are: <br><br>`0` - Tram, Streetcar, Light rail. Any light rail or street level system within a metropolitan area.<br>`1` - Subway, Metro. Any underground rail system within a metropolitan area.<br>`2` - Rail. Used for intercity or long-distance travel.<br>`3` - Bus. Used for short- and long-distance bus routes.<br>`4` - Ferry. Used for short- and long-distance boat service.<br>`5` - Cable car. Used for street-level cable cars where the cable runs beneath the car.<br>`6` - Gondola, Suspended cable car. Typically used for aerial cable cars where the car is suspended from the cable.<br>`7` - Funicular. Any rail system designed for steep inclines. |
|  `route_url` | URL | Optional | URL of a web page about the particular route. Should be different from the `agency.agency_url` value. |
|  `route_color` | Color | Optional | Route color designation that matches public facing material. Defaults to white (`FFFFFF`) when omitted or left empty. The color difference between `route_color` and `route_text_color` should provide sufficient contrast when viewed on a black and white screen. |
|  `route_text_color` | Color | Optional | Legible color to use for text drawn against a background of `route_color`. Defaults to black (`000000`) when omitted or left empty. The color difference between `route_color` and `route_text_color` should provide sufficient contrast when viewed on a black and white screen. |
|  `route_sort_order` | Non-negative integer | Optional | Orders the routes in a way which is ideal for presentation to customers. Routes with smaller `route_sort_order` values should be displayed first. |
