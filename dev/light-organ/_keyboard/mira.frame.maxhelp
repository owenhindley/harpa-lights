{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 7,
			"minor" : 0,
			"revision" : 0,
			"architecture" : "x64"
		}
,
		"rect" : [ 100.0, 100.0, 684.0, 599.0 ],
		"bglocked" : 0,
		"openinpresentation" : 0,
		"default_fontsize" : 12.0,
		"default_fontface" : 0,
		"default_fontname" : "Arial",
		"gridonopen" : 0,
		"gridsize" : [ 15.0, 15.0 ],
		"gridsnaponopen" : 0,
		"statusbarvisible" : 2,
		"toolbarvisible" : 1,
		"boxanimatetime" : 200,
		"imprint" : 0,
		"enablehscroll" : 1,
		"enablevscroll" : 1,
		"devicewidth" : 0.0,
		"description" : "",
		"digest" : "",
		"tags" : "",
		"showrootpatcherontab" : 0,
		"showontab" : 0,
		"boxes" : [ 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-2",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 0,
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 7,
							"minor" : 0,
							"revision" : 0,
							"architecture" : "x64"
						}
,
						"rect" : [ 0.0, 26.0, 684.0, 573.0 ],
						"bglocked" : 0,
						"openinpresentation" : 0,
						"default_fontsize" : 12.0,
						"default_fontface" : 0,
						"default_fontname" : "Arial",
						"gridonopen" : 0,
						"gridsize" : [ 15.0, 15.0 ],
						"gridsnaponopen" : 0,
						"statusbarvisible" : 2,
						"toolbarvisible" : 1,
						"boxanimatetime" : 200,
						"imprint" : 0,
						"enablehscroll" : 1,
						"enablevscroll" : 1,
						"devicewidth" : 0.0,
						"description" : "",
						"digest" : "",
						"tags" : "",
						"showontab" : 1,
						"boxes" : [ 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 12.0,
									"frgb" : 0.0,
									"id" : "obj-12",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 29.75, 261.0, 150.0, 20.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 29.75, 261.0, 150.0, 20.0 ],
									"text" : "tab order"
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 12.0,
									"id" : "obj-1",
									"maxclass" : "number",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "int", "bang" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 84.5, 261.0, 50.0, 20.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 84.5, 261.0, 50.0, 20.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "number[3]",
											"parameter_shortname" : "number",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "number[1]"
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 12.0,
									"frgb" : 0.0,
									"id" : "obj-9",
									"linecount" : 2,
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 29.75, 211.0, 248.5, 33.0 ],
									"presentation" : 1,
									"presentation_linecount" : 2,
									"presentation_rect" : [ 29.75, 211.0, 248.5, 33.0 ],
									"text" : "Send scripts to this mira.frame using the thispatcher object."
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial Bold",
									"fontsize" : 12.0,
									"frgb" : 0.0,
									"id" : "obj-4",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 11.0, 75.0, 167.0, 20.0 ],
									"text" : "Scripting"
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 12.0,
									"id" : "obj-15",
									"items" : [ "Scripting", ",", "Tabby", ",", "Tabitha", ",", "Tabinold", ",", "Tabarino" ],
									"maxclass" : "umenu",
									"numinlets" : 1,
									"numoutlets" : 3,
									"outlettype" : [ "int", "", "" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 374.0, 92.0, 100.0, 20.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "umenu",
											"parameter_shortname" : "umenu",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "umenu"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-13",
									"maxclass" : "toggle",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 412.2229, 185.0, 20.0, 20.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "toggle[23]",
											"parameter_shortname" : "toggle[23]",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "toggle[1]"
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 12.0,
									"id" : "obj-11",
									"linecount" : 3,
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 398.0, 121.0, 84.0, 45.0 ],
									"text" : "script send scriptyFrame tabname $1"
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 12.0,
									"id" : "obj-10",
									"maxclass" : "number",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "int", "bang" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 304.0, 92.0, 50.0, 20.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "number",
											"parameter_shortname" : "number",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "number"
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 12.0,
									"id" : "obj-8",
									"linecount" : 3,
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 324.0, 214.0, 83.0, 45.0 ],
									"text" : "script send scriptyFrame focus"
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 12.0,
									"id" : "obj-6",
									"linecount" : 3,
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 412.2229, 214.0, 115.0, 45.0 ],
									"text" : "script send scriptyFrame draw_tab_name $1"
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 12.0,
									"id" : "obj-5",
									"linecount" : 3,
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 304.0, 121.0, 86.0, 45.0 ],
									"text" : "script send scriptyFrame taborder $1"
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 12.0,
									"frgb" : 0.0,
									"id" : "obj-19",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 551.2229, 30.414856, 87.0, 20.0 ],
									"text" : "App Store",
									"textcolor" : [ 0.282353, 0.560784, 0.886275, 1.0 ],
									"underline" : 1
								}

							}
, 							{
								"box" : 								{
									"handoff" : "",
									"id" : "obj-21",
									"maxclass" : "ubutton",
									"numinlets" : 1,
									"numoutlets" : 4,
									"outlettype" : [ "bang", "bang", "", "int" ],
									"patching_rect" : [ 485.2229, 10.0, 154.0, 47.829712 ]
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 12.0,
									"frgb" : 0.0,
									"id" : "obj-22",
									"linecount" : 2,
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 491.2229, 18.414856, 147.0, 33.0 ],
									"text" : "Get the latest version of Mira in the"
								}

							}
, 							{
								"box" : 								{
									"bgcolor" : [ 0.994927, 0.989975, 0.9901, 1.0 ],
									"border" : 2,
									"bordercolor" : [ 0.283266, 0.559256, 0.886502, 1.0 ],
									"id" : "obj-18",
									"maxclass" : "panel",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 485.2229, 10.0, 154.0, 47.829712 ]
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 12.0,
									"hidden" : 1,
									"id" : "obj-24",
									"linecount" : 3,
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 485.2229, 10.0, 392.0, 45.0 ],
									"text" : ";\rmax launchbrowser https://itunes.apple.com/us/app/mira-controller/id649586480?ls=1&mt=8"
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 12.0,
									"id" : "obj-25",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "" ],
									"patching_rect" : [ 304.0, 312.0, 69.0, 20.0 ],
									"save" : [ "#N", "thispatcher", ";", "#Q", "end", ";" ],
									"text" : "thispatcher"
								}

							}
, 							{
								"box" : 								{
									"bubblepoint" : 0.09,
									"bubbleside" : 2,
									"fontname" : "Arial",
									"fontsize" : 12.0,
									"frgb" : 0.0,
									"id" : "obj-3",
									"linecount" : 6,
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 10.0, 92.0, 261.0, 87.0 ],
									"text" : "mira.frame objects don't have inlets or outlets, but you can control them with scripting.\n\nOnce you give the mira.frame a scripting name in its inspector  you can send messages to  it with the thispatcher object."
								}

							}
, 							{
								"box" : 								{
									"border" : 0,
									"filename" : "helpdetails.js",
									"id" : "obj-2",
									"ignoreclick" : 1,
									"jsarguments" : [ "mira.frame" ],
									"maxclass" : "jsui",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 10.0, 10.0, 254.0, 55.0 ]
								}

							}
, 							{
								"box" : 								{
									"background" : 1,
									"id" : "obj-20",
									"ignoreclick" : 1,
									"maxclass" : "mira.frame",
									"numinlets" : 0,
									"numoutlets" : 0,
									"patching_rect" : [ 10.0, 197.0, 272.650421, 193.837409 ],
									"presentation" : 1,
									"presentation_rect" : [ 10.0, 197.0, 272.650421, 193.837409 ],
									"tabname" : "Scripting",
									"taborder" : 223,
									"varname" : "scriptyFrame"
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"destination" : [ "obj-5", 0 ],
									"disabled" : 0,
									"hidden" : 1,
									"midpoints" : [ 94.0, 291.0, 291.0, 291.0, 291.0, 117.0, 313.5, 117.0 ],
									"source" : [ "obj-1", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-5", 0 ],
									"disabled" : 0,
									"hidden" : 0,
									"source" : [ "obj-10", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-25", 0 ],
									"disabled" : 0,
									"hidden" : 0,
									"midpoints" : [ 407.5, 181.0, 313.0, 181.0, 313.0, 298.0, 313.5, 298.0 ],
									"source" : [ "obj-11", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-6", 0 ],
									"disabled" : 0,
									"hidden" : 0,
									"source" : [ "obj-13", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-11", 0 ],
									"disabled" : 0,
									"hidden" : 0,
									"source" : [ "obj-15", 1 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-24", 0 ],
									"disabled" : 0,
									"hidden" : 0,
									"source" : [ "obj-21", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-25", 0 ],
									"disabled" : 0,
									"hidden" : 0,
									"midpoints" : [ 313.5, 298.0, 313.5, 298.0 ],
									"source" : [ "obj-5", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-25", 0 ],
									"disabled" : 0,
									"hidden" : 0,
									"source" : [ "obj-6", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-25", 0 ],
									"disabled" : 0,
									"hidden" : 0,
									"source" : [ "obj-8", 0 ]
								}

							}
 ]
					}
,
					"patching_rect" : [ 78.0, 157.0, 65.0, 20.0 ],
					"saved_object_attributes" : 					{
						"default_fontface" : 0,
						"default_fontname" : "Arial",
						"default_fontsize" : 12.0,
						"description" : "",
						"digest" : "",
						"fontface" : 0,
						"fontname" : "Arial",
						"fontsize" : 12.0,
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"text" : "p scripting"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-1",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 0,
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 7,
							"minor" : 0,
							"revision" : 0,
							"architecture" : "x64"
						}
,
						"rect" : [ 0.0, 26.0, 684.0, 573.0 ],
						"bglocked" : 1,
						"openinpresentation" : 0,
						"default_fontsize" : 13.0,
						"default_fontface" : 0,
						"default_fontname" : "Arial",
						"gridonopen" : 0,
						"gridsize" : [ 5.0, 5.0 ],
						"gridsnaponopen" : 0,
						"statusbarvisible" : 2,
						"toolbarvisible" : 1,
						"boxanimatetime" : 200,
						"imprint" : 0,
						"enablehscroll" : 1,
						"enablevscroll" : 1,
						"devicewidth" : 0.0,
						"description" : "",
						"digest" : "",
						"tags" : "",
						"showontab" : 1,
						"boxes" : [ 							{
								"box" : 								{
									"id" : "obj-15",
									"knobcolor" : [ 0.270843, 0.270843, 0.270843, 1.0 ],
									"maxclass" : "slider",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 304.673584, 326.59259, 111.0, 25.107117 ],
									"presentation" : 1,
									"presentation_rect" : [ 304.673584, 326.59259, 111.0, 25.107117 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "slider[11]",
											"parameter_shortname" : "slider[2]",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "slider[2]"
								}

							}
, 							{
								"box" : 								{
									"columns" : 4,
									"id" : "obj-7",
									"maxclass" : "live.grid",
									"numinlets" : 2,
									"numoutlets" : 6,
									"outlettype" : [ "", "", "", "", "", "" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 211.673584, 300.59259, 92.131592, 77.107117 ],
									"presentation" : 1,
									"presentation_rect" : [ 211.673584, 300.59259, 92.131592, 77.107117 ],
									"rows" : 4,
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "live.grid",
											"parameter_shortname" : "live.grid",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "live.grid"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-20",
									"maxclass" : "swatch",
									"numinlets" : 3,
									"numoutlets" : 2,
									"outlettype" : [ "", "float" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 304.673584, 300.59259, 111.0, 24.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 304.673584, 300.59259, 111.0, 24.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "swatch",
											"parameter_shortname" : "swatch",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "swatch"
								}

							}
, 							{
								"box" : 								{
									"autopopulate" : 1,
									"fontname" : "Arial",
									"fontsize" : 13.0,
									"id" : "obj-16",
									"items" : [ "bball.mov", ",", "blading.mov", ",", "blossom.exr", ",", "bokeh.cubemap.jpg", ",", "cell.bump.png", ",", "chilis.jpg", ",", "colorbars.png", ",", "colorswatch.png", ",", "colorwheel.jpg", ",", "colorwheel.png", ",", "countdown.mov", ",", "countdown15.mov", ",", "crashtest.mov", ",", "dishes.mov", ",", "dozer.mov", ",", "dvducks.mov", ",", "dvkite.mov", ",", "floresc.exr", ",", "fuzz_circle.jpg", ",", "garbage.mov", ",", "greenswirls.exr", ",", "horizon.exr", ",", "luv.qfx", ",", "models", ",", "oh.mov", ",", "oren-nayer.lut.exr", ",", "ozone.mov", ",", "panorama_cube_map.png", ",", "psychotiles.exr", ",", "rain.mov", ",", "rca.mov", ",", "redball.mov", ",", "sunset.jpg", ",", "talk.aiff", ",", "track1.mov", ",", "track2.mov", ",", "traffic.mov", ",", "volume-datasets", ",", "wheel.mov" ],
									"maxclass" : "umenu",
									"numinlets" : 1,
									"numoutlets" : 3,
									"outlettype" : [ "int", "", "" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 103.0, 311.699707, 86.0, 21.0 ],
									"prefix" : "Macintosh HD:/Applications/Max 6.1/patches/media/",
									"presentation" : 1,
									"presentation_rect" : [ 103.0, 311.699707, 86.0, 21.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "umenu[1]",
											"parameter_shortname" : "umenu[1]",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "umenu"
								}

							}
, 							{
								"box" : 								{
									"candicane2" : [ 0.282353, 0.560784, 0.886275, 1.0 ],
									"candicane3" : [ 0.0, 0.387318, 0.844577, 1.0 ],
									"candycane" : 3,
									"id" : "obj-366",
									"maxclass" : "multislider",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 456.727051, 242.699707, 173.495865, 122.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 456.727051, 242.699707, 173.495865, 122.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "multislider[2]",
											"parameter_shortname" : "multislider[1]",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"setminmax" : [ -1.2, 1.2 ],
									"setstyle" : 3,
									"size" : 3,
									"slidercolor" : [ 0.431373, 0.752941, 0.890196, 1.0 ],
									"varname" : "multislider[3]"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-8",
									"maxclass" : "live.text",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 108.0, 336.699707, 81.0, 20.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 108.0, 336.699707, 81.0, 20.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "live.text",
											"parameter_shortname" : "live.text",
											"parameter_type" : 2,
											"parameter_mmax" : 1.0,
											"parameter_enum" : [ "val1", "val2" ]
										}

									}
,
									"text" : "live",
									"texton" : ".text",
									"varname" : "live.text"
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 12.0,
									"frgb" : 0.0,
									"id" : "obj-19",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 550.533752, 30.414856, 87.0, 20.0 ],
									"text" : "App Store",
									"textcolor" : [ 0.282353, 0.560784, 0.886275, 1.0 ],
									"underline" : 1
								}

							}
, 							{
								"box" : 								{
									"handoff" : "",
									"id" : "obj-21",
									"maxclass" : "ubutton",
									"numinlets" : 1,
									"numoutlets" : 4,
									"outlettype" : [ "bang", "bang", "", "int" ],
									"patching_rect" : [ 484.533752, 10.0, 154.0, 47.829712 ]
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 12.0,
									"frgb" : 0.0,
									"id" : "obj-22",
									"linecount" : 2,
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 490.533752, 18.414856, 147.0, 33.0 ],
									"text" : "Get the latest version of Mira in the"
								}

							}
, 							{
								"box" : 								{
									"bgcolor" : [ 0.994927, 0.989975, 0.9901, 1.0 ],
									"border" : 2,
									"bordercolor" : [ 0.283266, 0.559256, 0.886502, 1.0 ],
									"id" : "obj-18",
									"maxclass" : "panel",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 484.533752, 10.0, 154.0, 47.829712 ]
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 12.0,
									"hidden" : 1,
									"id" : "obj-24",
									"linecount" : 3,
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 484.533752, 10.0, 392.0, 45.0 ],
									"text" : ";\rmax launchbrowser https://itunes.apple.com/us/app/mira-controller/id649586480?ls=1&mt=8"
								}

							}
, 							{
								"box" : 								{
									"bubblepoint" : 0.07,
									"bubbleside" : 0,
									"bubbletextmargin" : 10,
									"fontname" : "Arial",
									"fontsize" : 12.0,
									"frgb" : 0.0,
									"id" : "obj-17",
									"linecount" : 10,
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 10.0, 89.597595, 190.0, 141.0 ],
									"presentation" : 1,
									"presentation_linecount" : 10,
									"presentation_rect" : [ 10.0, 89.597595, 190.0, 141.0 ],
									"text" : "Once you've installed the Mira package, supported objects will appear with an 'M' icon in the object explorer. The icon also appears when you drag supported objects over a frame. \n\nSupported objects will also autocomplete in a new object box when you start typing \"mira\""
								}

							}
, 							{
								"box" : 								{
									"bubble" : 1,
									"fontname" : "Arial",
									"fontsize" : 13.0,
									"frgb" : 0.0,
									"hidden" : 1,
									"id" : "obj-11",
									"linecount" : 4,
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 780.0, 56.097595, 176.0, 69.0 ],
									"text" : "You can rout mira.motion's data out to a multitouch object for display"
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 13.0,
									"hidden" : 1,
									"id" : "obj-31",
									"maxclass" : "newobj",
									"numinlets" : 2,
									"numoutlets" : 2,
									"outlettype" : [ "", "" ],
									"patching_rect" : [ 676.305176, 102.597595, 85.0, 21.0 ],
									"text" : "zl.slice 4"
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 13.0,
									"hidden" : 1,
									"id" : "obj-367",
									"maxclass" : "newobj",
									"numinlets" : 6,
									"numoutlets" : 6,
									"outlettype" : [ "", "", "", "", "", "" ],
									"patching_rect" : [ 676.305176, 136.199707, 326.0, 21.0 ],
									"text" : "route rotationrate rawaccel compass orientation gravity"
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 13.0,
									"hidden" : 1,
									"id" : "obj-1",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 676.305176, 77.597595, 101.0, 21.0 ],
									"text" : "mira.motion"
								}

							}
, 							{
								"box" : 								{
									"autofit" : 1,
									"id" : "obj-60",
									"maxclass" : "fpic",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 144.263672, 383.164856, 39.736267, 38.799561 ],
									"pic" : "Mira-100px.png",
									"presentation" : 1,
									"presentation_rect" : [ 144.263672, 383.164856, 39.736267, 38.799561 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-3",
									"maxclass" : "gain~",
									"numinlets" : 2,
									"numoutlets" : 2,
									"outlettype" : [ "signal", "int" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 442.695435, 483.699707, 187.527481, 19.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 442.695435, 483.699707, 187.527481, 19.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "gain~",
											"parameter_shortname" : "gain~",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "gain~"
								}

							}
, 							{
								"box" : 								{
									"coldcolor" : [ 0.0, 0.387318, 0.844577, 1.0 ],
									"id" : "obj-73",
									"maxclass" : "meter~",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "float" ],
									"patching_rect" : [ 442.695435, 510.699707, 187.527481, 12.5 ],
									"presentation" : 1,
									"presentation_rect" : [ 442.695435, 510.699707, 187.527481, 12.5 ],
									"tepidcolor" : [ 0.282353, 0.560784, 0.886275, 1.0 ],
									"warmcolor" : [ 0.431373, 0.752941, 0.890196, 1.0 ]
								}

							}
, 							{
								"box" : 								{
									"fontsize" : 14.298763,
									"id" : "obj-356",
									"maxclass" : "live.numbox",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "float" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 536.695435, 457.699707, 93.527481, 19.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 536.695435, 457.699707, 93.527481, 19.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "live.numbox[2]",
											"parameter_shortname" : "live.numbox",
											"parameter_type" : 0,
											"parameter_unitstyle" : 0
										}

									}
,
									"varname" : "live.numbox[1]"
								}

							}
, 							{
								"box" : 								{
									"fontsize" : 14.298763,
									"id" : "obj-86",
									"maxclass" : "live.numbox",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "float" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 442.695435, 457.699707, 87.838333, 19.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 442.695435, 457.699707, 87.838333, 19.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "live.numbox[1]",
											"parameter_shortname" : "live.numbox",
											"parameter_type" : 0,
											"parameter_unitstyle" : 0
										}

									}
,
									"varname" : "live.numbox"
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 12.0,
									"id" : "obj-354",
									"maxclass" : "flonum",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "float", "bang" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 536.695435, 432.949707, 93.527481, 20.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 536.695435, 432.949707, 93.527481, 20.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "flonum[2]",
											"parameter_shortname" : "flonum",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "flonum[1]"
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 12.0,
									"id" : "obj-355",
									"maxclass" : "number",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "int", "bang" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 536.695435, 408.199707, 93.527481, 20.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 536.695435, 408.199707, 93.527481, 20.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "number[2]",
											"parameter_shortname" : "number",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "number[1]"
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 12.0,
									"id" : "obj-83",
									"maxclass" : "flonum",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "float", "bang" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 442.695435, 432.949707, 87.838333, 20.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 442.695435, 432.949707, 87.838333, 20.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "flonum[1]",
											"parameter_shortname" : "flonum",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "flonum"
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 12.0,
									"id" : "obj-85",
									"maxclass" : "number",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "int", "bang" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 442.695435, 408.199707, 87.838333, 20.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 442.695435, 408.199707, 87.838333, 20.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "number[1]",
											"parameter_shortname" : "number",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "number"
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 13.0,
									"id" : "obj-346",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 10.0, 401.964417, 121.0, 19.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 10.0, 401.964417, 121.0, 19.0 ],
									"text" : "message"
								}

							}
, 							{
								"box" : 								{
									"bgcolor" : [ 0.0, 0.340569, 0.591949, 1.0 ],
									"hint" : "panel",
									"id" : "obj-344",
									"maxclass" : "panel",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 155.0, 492.032104, 34.0, 36.167603 ],
									"presentation" : 1,
									"presentation_rect" : [ 155.0, 492.032104, 34.0, 36.167603 ],
									"shape" : 3
								}

							}
, 							{
								"box" : 								{
									"bgcolor" : [ 0.410211, 0.47277, 0.589785, 1.0 ],
									"hint" : "panel",
									"id" : "obj-343",
									"maxclass" : "panel",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 108.0, 492.032104, 34.0, 36.167603 ],
									"presentation" : 1,
									"presentation_rect" : [ 108.0, 492.032104, 34.0, 36.167603 ],
									"shape" : 2,
									"vertical_direction" : 1
								}

							}
, 							{
								"box" : 								{
									"bgcolor" : [ 0.282353, 0.560784, 0.886275, 1.0 ],
									"hint" : "panel",
									"id" : "obj-342",
									"maxclass" : "panel",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 60.0, 492.032104, 34.0, 36.167603 ],
									"presentation" : 1,
									"presentation_rect" : [ 60.0, 492.032104, 34.0, 36.167603 ],
									"shape" : 1
								}

							}
, 							{
								"box" : 								{
									"bgcolor" : [ 0.431373, 0.752941, 0.890196, 1.0 ],
									"hint" : "panel",
									"id" : "obj-338",
									"maxclass" : "panel",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 14.0, 492.032104, 34.0, 36.167603 ],
									"presentation" : 1,
									"presentation_rect" : [ 14.0, 492.032104, 34.0, 36.167603 ]
								}

							}
, 							{
								"box" : 								{
									"bubble" : 1,
									"bubbleside" : 3,
									"bubbletextmargin" : 8,
									"fontname" : "Arial",
									"fontsize" : 10.0,
									"frgb" : 0.0,
									"id" : "obj-337",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 9.5, 427.301819, 121.5, 28.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 9.5, 427.301819, 121.5, 28.0 ],
									"text" : "bubble comment",
									"textcolor" : [ 0.356809, 0.356809, 0.356809, 1.0 ]
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 10.0,
									"frgb" : 0.0,
									"id" : "obj-336",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 138.263672, 432.301819, 59.263733, 18.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 138.263672, 432.301819, 59.263733, 18.0 ],
									"text" : "comment",
									"textcolor" : [ 0.356809, 0.356809, 0.356809, 1.0 ]
								}

							}
, 							{
								"box" : 								{
									"activebgoncolor" : [ 0.431373, 0.752941, 0.890196, 1.0 ],
									"bgoncolor" : [ 0.815686, 0.847059, 0.886275, 0.0 ],
									"bordercolor" : [ 0.27451, 0.32549, 0.4, 0.0 ],
									"focusbordercolor" : [ 0.0, 0.019608, 0.078431, 0.0 ],
									"id" : "obj-80",
									"maxclass" : "live.tab",
									"multiline" : 0,
									"num_lines_patching" : 1,
									"num_lines_presentation" : 1,
									"numinlets" : 1,
									"numoutlets" : 3,
									"outlettype" : [ "", "", "float" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 10.0, 463.694702, 179.0, 20.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 10.0, 463.694702, 179.0, 20.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "live.tab[1]",
											"parameter_shortname" : "live.tab",
											"parameter_type" : 2,
											"parameter_enum" : [ "live", "dot", "tab" ],
											"parameter_unitstyle" : 0
										}

									}
,
									"varname" : "live.tab"
								}

							}
, 							{
								"box" : 								{
									"focusbordercolor" : [ 0.757527, 0.757527, 0.757527, 1.0 ],
									"id" : "obj-333",
									"maxclass" : "live.slider",
									"modulationcolor" : [ 0.431373, 0.752941, 0.890196, 1.0 ],
									"numinlets" : 1,
									"numoutlets" : 2,
									"orientation" : 1,
									"outlettype" : [ "", "float" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 318.173584, 241.699707, 94.0, 40.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 318.173584, 241.699707, 94.0, 40.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "live.slider[2]",
											"parameter_shortname" : "live.slider",
											"parameter_type" : 0,
											"parameter_unitstyle" : 0
										}

									}
,
									"slidercolor" : [ 1.0, 1.0, 1.0, 1.0 ],
									"textcolor" : [ 0.25, 0.25, 0.25, 1.0 ],
									"tribordercolor" : [ 0.75, 0.75, 0.75, 1.0 ],
									"tricolor" : [ 0.25, 0.25, 0.25, 1.0 ],
									"trioncolor" : [ 0.0, 0.0, 0.0, 1.0 ],
									"varname" : "live.slider[2]"
								}

							}
, 							{
								"box" : 								{
									"focusbordercolor" : [ 0.757527, 0.757527, 0.757527, 1.0 ],
									"id" : "obj-332",
									"maxclass" : "live.slider",
									"modulationcolor" : [ 0.431373, 0.752941, 0.890196, 1.0 ],
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "float" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 278.805176, 235.253265, 25.0, 65.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 278.805176, 235.253265, 25.0, 65.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "live.slider[5]",
											"parameter_shortname" : "live.slider",
											"parameter_type" : 0,
											"parameter_unitstyle" : 0
										}

									}
,
									"slidercolor" : [ 1.0, 1.0, 1.0, 1.0 ],
									"textcolor" : [ 0.25, 0.25, 0.25, 1.0 ],
									"tribordercolor" : [ 0.75, 0.75, 0.75, 1.0 ],
									"tricolor" : [ 0.25, 0.25, 0.25, 1.0 ],
									"trioncolor" : [ 0.0, 0.0, 0.0, 1.0 ],
									"varname" : "live.slider[1]"
								}

							}
, 							{
								"box" : 								{
									"activedialcolor" : [ 0.431373, 0.752941, 0.890196, 1.0 ],
									"fontsize" : 8.0,
									"id" : "obj-318",
									"maxclass" : "live.dial",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "float" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 363.305176, 154.597595, 48.0, 42.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 363.305176, 154.597595, 48.0, 42.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "live.dial[5]",
											"parameter_shortname" : "live.dial",
											"parameter_type" : 0,
											"parameter_unitstyle" : 0
										}

									}
,
									"varname" : "live.dial[4]"
								}

							}
, 							{
								"box" : 								{
									"activedialcolor" : [ 0.431373, 0.752941, 0.890196, 1.0 ],
									"fontsize" : 8.0,
									"id" : "obj-317",
									"maxclass" : "live.dial",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "float" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 315.305176, 154.597595, 48.0, 42.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 315.305176, 154.597595, 48.0, 42.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "live.dial[4]",
											"parameter_shortname" : "live.dial",
											"parameter_type" : 0,
											"parameter_unitstyle" : 0
										}

									}
,
									"varname" : "live.dial[3]"
								}

							}
, 							{
								"box" : 								{
									"activedialcolor" : [ 0.431373, 0.752941, 0.890196, 1.0 ],
									"fontsize" : 8.0,
									"id" : "obj-316",
									"maxclass" : "live.dial",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "float" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 267.305176, 154.597595, 48.0, 42.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 267.305176, 154.597595, 48.0, 42.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "live.dial[3]",
											"parameter_shortname" : "live.dial",
											"parameter_type" : 0,
											"parameter_unitstyle" : 0
										}

									}
,
									"varname" : "live.dial[2]"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-312",
									"maxclass" : "dial",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "float" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 363.305176, 100.097595, 44.0, 44.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 363.305176, 100.097595, 44.0, 44.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "dial[12]",
											"parameter_shortname" : "dial[9]",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "dial[4]"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-311",
									"maxclass" : "dial",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "float" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 315.305176, 100.097595, 44.0, 44.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 315.305176, 100.097595, 44.0, 44.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "dial[11]",
											"parameter_shortname" : "dial[9]",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "dial[2]"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-310",
									"maxclass" : "dial",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "float" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 267.305176, 100.097595, 44.0, 44.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 267.305176, 100.097595, 44.0, 44.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "dial[10]",
											"parameter_shortname" : "dial[9]",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "dial[1]"
								}

							}
, 							{
								"box" : 								{
									"activedialcolor" : [ 0.431373, 0.752941, 0.890196, 1.0 ],
									"fontsize" : 8.0,
									"id" : "obj-227",
									"maxclass" : "live.dial",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "float" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 219.305176, 154.597595, 48.0, 42.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 219.305176, 154.597595, 48.0, 42.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "live.dial[2]",
											"parameter_shortname" : "live.dial",
											"parameter_type" : 0,
											"parameter_unitstyle" : 0
										}

									}
,
									"varname" : "live.dial[1]"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-226",
									"maxclass" : "dial",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "float" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 219.305176, 100.097595, 44.0, 44.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 219.305176, 100.097595, 44.0, 44.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "dial[9]",
											"parameter_shortname" : "dial[9]",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "dial"
								}

							}
, 							{
								"box" : 								{
									"bordercolor" : [ 0.820284, 0.820284, 0.820284, 1.0 ],
									"id" : "obj-79",
									"maxclass" : "kslider",
									"numinlets" : 2,
									"numoutlets" : 2,
									"outlettype" : [ "int", "int" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 214.673584, 483.199707, 200.0, 45.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 214.673584, 483.199707, 200.0, 45.0 ],
									"range" : 35,
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "kslider[1]",
											"parameter_shortname" : "kslider",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "kslider"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-214",
									"knobcolor" : [ 0.270843, 0.270843, 0.270843, 1.0 ],
									"maxclass" : "slider",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 304.673584, 352.59259, 111.0, 25.107117 ],
									"presentation" : 1,
									"presentation_rect" : [ 304.673584, 352.59259, 111.0, 25.107117 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "slider[10]",
											"parameter_shortname" : "slider[2]",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "slider[6]"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-211",
									"knobcolor" : [ 0.270843, 0.270843, 0.270843, 1.0 ],
									"maxclass" : "slider",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 246.305176, 241.699707, 20.0, 52.107117 ],
									"presentation" : 1,
									"presentation_rect" : [ 246.305176, 241.699707, 20.0, 52.107117 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "slider[7]",
											"parameter_shortname" : "slider[2]",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "slider[3]"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-210",
									"knobcolor" : [ 0.270843, 0.270843, 0.270843, 1.0 ],
									"maxclass" : "slider",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 219.305176, 241.699707, 20.0, 52.107117 ],
									"presentation" : 1,
									"presentation_rect" : [ 219.305176, 241.699707, 20.0, 52.107117 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "slider[6]",
											"parameter_shortname" : "slider[2]",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "slider[1]"
								}

							}
, 							{
								"box" : 								{
									"bordercolor" : [ 0.757527, 0.757527, 0.757527, 1.0 ],
									"fgcolor" : [ 0.431373, 0.752941, 0.890196, 1.0 ],
									"id" : "obj-77",
									"maxclass" : "rslider",
									"numinlets" : 2,
									"numoutlets" : 2,
									"outlettype" : [ "", "" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 215.673584, 385.301819, 199.0, 45.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 215.673584, 385.301819, 199.0, 45.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "rslider[1]",
											"parameter_shortname" : "rslider",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "rslider"
								}

							}
, 							{
								"box" : 								{
									"bgcolor" : [ 0.757527, 0.757527, 0.757527, 1.0 ],
									"id" : "obj-137",
									"maxclass" : "button",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "bang" ],
									"patching_rect" : [ 169.0, 261.699707, 20.0, 20.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 169.0, 261.699707, 20.0, 20.0 ]
								}

							}
, 							{
								"box" : 								{
									"bgcolor" : [ 0.757527, 0.757527, 0.757527, 1.0 ],
									"id" : "obj-139",
									"maxclass" : "button",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "bang" ],
									"patching_rect" : [ 147.0, 261.699707, 20.0, 20.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 147.0, 261.699707, 20.0, 20.0 ]
								}

							}
, 							{
								"box" : 								{
									"bgcolor" : [ 0.757527, 0.757527, 0.757527, 1.0 ],
									"id" : "obj-141",
									"maxclass" : "button",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "bang" ],
									"patching_rect" : [ 125.0, 261.699707, 20.0, 20.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 125.0, 261.699707, 20.0, 20.0 ]
								}

							}
, 							{
								"box" : 								{
									"bgcolor" : [ 0.757527, 0.757527, 0.757527, 1.0 ],
									"id" : "obj-143",
									"maxclass" : "button",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "bang" ],
									"patching_rect" : [ 103.0, 261.699707, 20.0, 20.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 103.0, 261.699707, 20.0, 20.0 ]
								}

							}
, 							{
								"box" : 								{
									"activebgoncolor" : [ 0.431373, 0.752941, 0.890196, 1.0 ],
									"id" : "obj-132",
									"maxclass" : "live.button",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 80.0, 311.699707, 20.0, 20.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 80.0, 311.699707, 20.0, 20.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "live.button[4]",
											"parameter_shortname" : "live.button",
											"parameter_type" : 2,
											"parameter_mmax" : 1.0,
											"parameter_enum" : [ "off", "on" ]
										}

									}
,
									"varname" : "live.button[3]"
								}

							}
, 							{
								"box" : 								{
									"bgcolor" : [ 0.757527, 0.757527, 0.757527, 1.0 ],
									"id" : "obj-133",
									"maxclass" : "button",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "bang" ],
									"patching_rect" : [ 80.0, 261.699707, 20.0, 20.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 80.0, 261.699707, 20.0, 20.0 ]
								}

							}
, 							{
								"box" : 								{
									"activebgoncolor" : [ 0.431373, 0.752941, 0.890196, 1.0 ],
									"id" : "obj-134",
									"maxclass" : "live.button",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 58.0, 311.699707, 20.0, 20.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 58.0, 311.699707, 20.0, 20.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "live.button[5]",
											"parameter_shortname" : "live.button",
											"parameter_type" : 2,
											"parameter_mmax" : 1.0,
											"parameter_enum" : [ "off", "on" ]
										}

									}
,
									"varname" : "live.button[4]"
								}

							}
, 							{
								"box" : 								{
									"bgcolor" : [ 0.757527, 0.757527, 0.757527, 1.0 ],
									"id" : "obj-135",
									"maxclass" : "button",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "bang" ],
									"patching_rect" : [ 58.0, 261.699707, 20.0, 20.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 58.0, 261.699707, 20.0, 20.0 ]
								}

							}
, 							{
								"box" : 								{
									"activebgoncolor" : [ 0.431373, 0.752941, 0.890196, 1.0 ],
									"id" : "obj-130",
									"maxclass" : "live.button",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 36.0, 311.699707, 20.0, 20.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 36.0, 311.699707, 20.0, 20.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "live.button[3]",
											"parameter_shortname" : "live.button",
											"parameter_type" : 2,
											"parameter_mmax" : 1.0,
											"parameter_enum" : [ "off", "on" ]
										}

									}
,
									"varname" : "live.button[2]"
								}

							}
, 							{
								"box" : 								{
									"bgcolor" : [ 0.757527, 0.757527, 0.757527, 1.0 ],
									"id" : "obj-131",
									"maxclass" : "button",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "bang" ],
									"patching_rect" : [ 36.0, 261.699707, 20.0, 20.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 36.0, 261.699707, 20.0, 20.0 ]
								}

							}
, 							{
								"box" : 								{
									"activebgoncolor" : [ 0.431373, 0.752941, 0.890196, 1.0 ],
									"id" : "obj-13",
									"maxclass" : "live.button",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 14.0, 311.699707, 20.0, 20.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 14.0, 311.699707, 20.0, 20.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "live.button[2]",
											"parameter_shortname" : "live.button",
											"parameter_type" : 2,
											"parameter_mmax" : 1.0,
											"parameter_enum" : [ "off", "on" ]
										}

									}
,
									"varname" : "live.button[1]"
								}

							}
, 							{
								"box" : 								{
									"bgcolor" : [ 0.757527, 0.757527, 0.757527, 1.0 ],
									"id" : "obj-14",
									"maxclass" : "button",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "bang" ],
									"patching_rect" : [ 14.0, 261.699707, 20.0, 20.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 14.0, 261.699707, 20.0, 20.0 ]
								}

							}
, 							{
								"box" : 								{
									"bordercolor" : [ 0.782276, 0.782276, 0.782276, 1.0 ],
									"candicane2" : [ 0.282353, 0.560784, 0.886275, 1.0 ],
									"candicane3" : [ 0.431373, 0.752941, 0.890196, 1.0 ],
									"candicane4" : [ 0.298039, 0.380392, 0.658824, 1.0 ],
									"candicane5" : [ 0.282353, 0.560784, 0.886275, 1.0 ],
									"candycane" : 2,
									"id" : "obj-198",
									"maxclass" : "multislider",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 215.673584, 432.699707, 199.0, 43.662598 ],
									"presentation" : 1,
									"presentation_rect" : [ 215.673584, 432.699707, 199.0, 43.662598 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "multislider[6]",
											"parameter_shortname" : "multislider",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"setstyle" : 1,
									"signed" : 1,
									"size" : 10,
									"slidercolor" : [ 0.0, 0.387318, 0.844577, 1.0 ],
									"thickness" : 3,
									"varname" : "multislider[2]"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-165",
									"maxclass" : "toggle",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 15.0, 286.699707, 20.0, 20.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 15.0, 286.699707, 20.0, 20.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "toggle[22]",
											"parameter_shortname" : "toggle",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "toggle[3]"
								}

							}
, 							{
								"box" : 								{
									"activebgoncolor" : [ 0.431373, 0.752941, 0.890196, 1.0 ],
									"id" : "obj-166",
									"maxclass" : "live.toggle",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 15.0, 336.699707, 20.0, 20.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 15.0, 336.699707, 20.0, 20.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "live.toggle[12]",
											"parameter_shortname" : "live.toggle",
											"parameter_type" : 2,
											"parameter_mmax" : 1.0,
											"parameter_enum" : [ "off", "on" ]
										}

									}
,
									"varname" : "live.toggle[2]"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-163",
									"maxclass" : "toggle",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 37.0, 286.699707, 20.0, 20.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 37.0, 286.699707, 20.0, 20.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "toggle[21]",
											"parameter_shortname" : "toggle",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "toggle[2]"
								}

							}
, 							{
								"box" : 								{
									"activebgoncolor" : [ 0.431373, 0.752941, 0.890196, 1.0 ],
									"id" : "obj-164",
									"maxclass" : "live.toggle",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 37.0, 336.699707, 20.0, 20.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 37.0, 336.699707, 20.0, 20.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "live.toggle[11]",
											"parameter_shortname" : "live.toggle",
											"parameter_type" : 2,
											"parameter_mmax" : 1.0,
											"parameter_enum" : [ "off", "on" ]
										}

									}
,
									"varname" : "live.toggle[1]"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-161",
									"maxclass" : "toggle",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 169.0, 286.699707, 20.0, 20.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 169.0, 286.699707, 20.0, 20.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "toggle[20]",
											"parameter_shortname" : "toggle",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "toggle[9]"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-159",
									"maxclass" : "toggle",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 147.0, 286.699707, 20.0, 20.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 147.0, 286.699707, 20.0, 20.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "toggle[19]",
											"parameter_shortname" : "toggle",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "toggle[8]"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-157",
									"maxclass" : "toggle",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 125.0, 286.699707, 20.0, 20.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 125.0, 286.699707, 20.0, 20.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "toggle[18]",
											"parameter_shortname" : "toggle",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "toggle[7]"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-155",
									"maxclass" : "toggle",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 103.0, 286.699707, 20.0, 20.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 103.0, 286.699707, 20.0, 20.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "toggle[17]",
											"parameter_shortname" : "toggle",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "toggle[6]"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-153",
									"maxclass" : "toggle",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 81.0, 286.699707, 20.0, 20.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 81.0, 286.699707, 20.0, 20.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "toggle[16]",
											"parameter_shortname" : "toggle",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "toggle[5]"
								}

							}
, 							{
								"box" : 								{
									"activebgoncolor" : [ 0.431373, 0.752941, 0.890196, 1.0 ],
									"id" : "obj-154",
									"maxclass" : "live.toggle",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 81.0, 336.699707, 20.0, 20.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 81.0, 336.699707, 20.0, 20.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "live.toggle[6]",
											"parameter_shortname" : "live.toggle",
											"parameter_type" : 2,
											"parameter_mmax" : 1.0,
											"parameter_enum" : [ "off", "on" ]
										}

									}
,
									"varname" : "live.toggle[4]"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-151",
									"maxclass" : "toggle",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 59.0, 286.699707, 20.0, 20.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 59.0, 286.699707, 20.0, 20.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "toggle[15]",
											"parameter_shortname" : "toggle",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "toggle[4]"
								}

							}
, 							{
								"box" : 								{
									"activebgoncolor" : [ 0.431373, 0.752941, 0.890196, 1.0 ],
									"id" : "obj-152",
									"maxclass" : "live.toggle",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 59.0, 336.699707, 20.0, 20.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 59.0, 336.699707, 20.0, 20.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "live.toggle[5]",
											"parameter_shortname" : "live.toggle",
											"parameter_type" : 2,
											"parameter_mmax" : 1.0,
											"parameter_enum" : [ "off", "on" ]
										}

									}
,
									"varname" : "live.toggle[3]"
								}

							}
, 							{
								"box" : 								{
									"color" : [ 0.75, 0.75, 0.75, 0.2 ],
									"id" : "obj-5",
									"maxclass" : "mira.multitouch",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 439.305176, 97.597595, 190.91774, 129.602112 ],
									"pinch_enabled" : 0,
									"presentation" : 1,
									"presentation_rect" : [ 439.305176, 97.597595, 190.91774, 129.602112 ],
									"rotate_enabled" : 0,
									"swipe_enabled" : 0,
									"swipe_touch_count" : 0,
									"tap_enabled" : 0,
									"tap_tap_count" : 0,
									"tap_touch_count" : 0
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Verdana",
									"fontsize" : 10.0,
									"hidden" : 1,
									"id" : "obj-50",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 730.643372, 358.699707, 68.0, 19.0 ],
									"text" : "loadmess 1"
								}

							}
, 							{
								"box" : 								{
									"hidden" : 1,
									"id" : "obj-49",
									"maxclass" : "preset",
									"numinlets" : 1,
									"numoutlets" : 4,
									"outlettype" : [ "preset", "int", "preset", "int" ],
									"patching_rect" : [ 730.643372, 389.699707, 100.0, 40.0 ],
									"preset_data" : [ 										{
											"number" : 1,
											"data" : [ 5, "obj-6", "toggle", "int", 1, 5, "<invalid>", "live.slider", "float", 23.121204, 5, "obj-152", "live.toggle", "float", 1.0, 5, "obj-151", "toggle", "int", 0, 5, "obj-154", "live.toggle", "float", 0.0, 5, "obj-153", "toggle", "int", 1, 5, "obj-155", "toggle", "int", 0, 5, "obj-157", "toggle", "int", 1, 5, "obj-159", "toggle", "int", 0, 5, "obj-161", "toggle", "int", 1, 5, "obj-164", "live.toggle", "float", 0.0, 5, "obj-163", "toggle", "int", 1, 5, "obj-166", "live.toggle", "float", 1.0, 5, "obj-165", "toggle", "int", 0, 14, "obj-198", "multislider", "list", 1.0, 0.565217, -0.347826, -0.478261, -0.043478, 1.0, 1.0, 1.0, 0.478261, -0.347826, 6, "obj-77", "rslider", "list", 44, 101, 5, "obj-210", "slider", "float", 50.0, 5, "obj-211", "slider", "float", 23.0, 5, "<invalid>", "slider", "float", 84.0, 5, "obj-15", "slider", "float", 53.0, 5, "obj-214", "slider", "float", 80.0, 5, "obj-79", "kslider", "int", 48, 5, "obj-226", "dial", "float", 0.0, 5, "obj-227", "live.dial", "float", 0.0, 5, "obj-310", "dial", "float", 27.0, 5, "obj-311", "dial", "float", 66.0, 5, "obj-312", "dial", "float", 104.0, 5, "obj-316", "live.dial", "float", 24.700001, 5, "obj-317", "live.dial", "float", 44.599998, 5, "obj-318", "live.dial", "float", 76.400002, 5, "obj-332", "live.slider", "float", 103.878792, 5, "obj-333", "live.slider", "float", 43.400002, 5, "obj-80", "live.tab", "float", 1.0, 5, "obj-85", "number", "int", 135, 5, "obj-83", "flonum", "float", 61.00172, 5, "obj-355", "number", "int", 25, 5, "obj-354", "flonum", "float", 0.001, 5, "obj-86", "live.numbox", "float", 80.251564, 5, "obj-356", "live.numbox", "float", 4.5, 6, "obj-3", "gain~", "list", 118, 10.0, 5, "obj-8", "live.text", "float", 0.0, 7, "obj-366", "multislider", "list", 0.0, 0.0, 0.0, 5, "obj-16", "umenu", "int", 5, 11, "obj-20", "swatch", "list", 0.605999, 1.0, 0.297297, 1.0, 0.260116, 1.0, 0.648649 ]
										}
 ]
								}

							}
, 							{
								"box" : 								{
									"border" : 0,
									"filename" : "helpdetails.js",
									"id" : "obj-2",
									"ignoreclick" : 1,
									"jsarguments" : [ "mira.frame" ],
									"maxclass" : "jsui",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 10.0, 10.0, 254.0, 55.0 ]
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 12.0,
									"hidden" : 1,
									"id" : "obj-76",
									"maxclass" : "newobj",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "signal" ],
									"patching_rect" : [ 675.643372, 453.362305, 161.0, 20.0 ],
									"text" : "cycle~ 0.5"
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 13.0,
									"hidden" : 1,
									"id" : "obj-4",
									"maxclass" : "newobj",
									"numinlets" : 2,
									"numoutlets" : 0,
									"patching_rect" : [ 675.643372, 426.362305, 39.0, 21.0 ],
									"text" : "dac~"
								}

							}
, 							{
								"box" : 								{
									"hidden" : 1,
									"id" : "obj-6",
									"maxclass" : "toggle",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 675.643372, 389.699707, 28.0, 28.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "toggle[2]",
											"parameter_shortname" : "toggle[2]",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "toggle[1]"
								}

							}
, 							{
								"box" : 								{
									"background" : 1,
									"fontname" : "Arial",
									"fontsize" : 10.0,
									"frgb" : 0.0,
									"id" : "obj-12",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 219.305176, 218.648651, 121.0, 18.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 219.305176, 218.648651, 121.0, 18.0 ],
									"text" : "SLIDERS",
									"textcolor" : [ 0.356809, 0.356809, 0.356809, 1.0 ]
								}

							}
, 							{
								"box" : 								{
									"angle" : -90.0,
									"background" : 1,
									"bgcolor" : [ 0.243442, 0.243442, 0.243442, 1.0 ],
									"border" : 1,
									"bordercolor" : [ 0.7, 0.7, 0.7, 1.0 ],
									"grad1" : [ 0.9, 0.9, 0.9, 1.0 ],
									"grad2" : [ 0.75, 0.75, 0.75, 1.0 ],
									"id" : "obj-9",
									"maxclass" : "panel",
									"mode" : 1,
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 208.673584, 216.648651, 210.989014, 319.051056 ],
									"presentation" : 1,
									"presentation_rect" : [ 208.673584, 216.648651, 210.989014, 319.051056 ],
									"rounded" : 9
								}

							}
, 							{
								"box" : 								{
									"background" : 1,
									"fontname" : "Arial",
									"fontsize" : 10.0,
									"frgb" : 0.0,
									"id" : "obj-372",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 439.695435, 333.09259, 26.527481, 18.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 439.695435, 333.09259, 26.527481, 18.0 ],
									"text" : "Z-",
									"textcolor" : [ 0.356809, 0.356809, 0.356809, 1.0 ]
								}

							}
, 							{
								"box" : 								{
									"background" : 1,
									"fontname" : "Arial",
									"fontsize" : 10.0,
									"frgb" : 0.0,
									"id" : "obj-371",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 439.695435, 293.362305, 26.527481, 18.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 439.695435, 293.362305, 26.527481, 18.0 ],
									"text" : "Y-",
									"textcolor" : [ 0.356809, 0.356809, 0.356809, 1.0 ]
								}

							}
, 							{
								"box" : 								{
									"background" : 1,
									"fontname" : "Arial",
									"fontsize" : 10.0,
									"frgb" : 0.0,
									"id" : "obj-370",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 439.695435, 253.562744, 23.527466, 18.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 439.695435, 253.562744, 23.527466, 18.0 ],
									"text" : "X-",
									"textcolor" : [ 0.356809, 0.356809, 0.356809, 1.0 ]
								}

							}
, 							{
								"box" : 								{
									"background" : 1,
									"fontname" : "Arial",
									"fontsize" : 10.0,
									"frgb" : 0.0,
									"id" : "obj-360",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 439.305176, 81.597595, 187.527466, 18.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 439.305176, 81.597595, 187.527466, 18.0 ],
									"text" : "MULTITOUCH / MOTION",
									"textcolor" : [ 0.356809, 0.356809, 0.356809, 1.0 ]
								}

							}
, 							{
								"box" : 								{
									"angle" : -90.0,
									"background" : 1,
									"bgcolor" : [ 0.243442, 0.243442, 0.243442, 1.0 ],
									"border" : 1,
									"bordercolor" : [ 0.698039, 0.698039, 0.698039, 1.0 ],
									"grad1" : [ 0.898039, 0.898039, 0.898039, 1.0 ],
									"grad2" : [ 0.74902, 0.74902, 0.74902, 1.0 ],
									"id" : "obj-361",
									"maxclass" : "panel",
									"mode" : 1,
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 433.673584, 77.597595, 204.860184, 300.102112 ],
									"presentation" : 1,
									"presentation_rect" : [ 433.673584, 77.597595, 204.860184, 300.102112 ],
									"rounded" : 9
								}

							}
, 							{
								"box" : 								{
									"background" : 1,
									"fontname" : "Arial",
									"fontsize" : 10.0,
									"frgb" : 0.0,
									"id" : "obj-222",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 10.0, 244.699707, 173.999939, 18.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 10.0, 244.699707, 173.999939, 18.0 ],
									"text" : "BUTTONS AND TOGGLES",
									"textcolor" : [ 0.356809, 0.356809, 0.356809, 1.0 ]
								}

							}
, 							{
								"box" : 								{
									"background" : 1,
									"fontname" : "Arial",
									"fontsize" : 10.0,
									"frgb" : 0.0,
									"id" : "obj-349",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 439.695435, 389.699707, 179.0, 18.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 439.695435, 389.699707, 179.0, 18.0 ],
									"text" : "MONITORING AND CONTROL",
									"textcolor" : [ 0.356809, 0.356809, 0.356809, 1.0 ]
								}

							}
, 							{
								"box" : 								{
									"background" : 1,
									"fontname" : "Arial",
									"fontsize" : 10.0,
									"frgb" : 0.0,
									"id" : "obj-334",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 10.0, 378.301819, 121.0, 18.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 10.0, 378.301819, 121.0, 18.0 ],
									"text" : "UI CONSTRUCTION",
									"textcolor" : [ 0.356809, 0.356809, 0.356809, 1.0 ]
								}

							}
, 							{
								"box" : 								{
									"background" : 1,
									"fontname" : "Arial",
									"fontsize" : 10.0,
									"frgb" : 0.0,
									"id" : "obj-266",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 214.305176, 81.597595, 121.0, 18.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 214.305176, 81.597595, 121.0, 18.0 ],
									"text" : "DIALS",
									"textcolor" : [ 0.356809, 0.356809, 0.356809, 1.0 ]
								}

							}
, 							{
								"box" : 								{
									"angle" : -90.0,
									"background" : 1,
									"bgcolor" : [ 0.243442, 0.243442, 0.243442, 1.0 ],
									"border" : 1,
									"bordercolor" : [ 0.7, 0.7, 0.7, 1.0 ],
									"grad1" : [ 0.9, 0.9, 0.9, 1.0 ],
									"grad2" : [ 0.75, 0.75, 0.75, 1.0 ],
									"id" : "obj-303",
									"maxclass" : "panel",
									"mode" : 1,
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 208.673584, 79.597595, 210.989014, 131.102112 ],
									"presentation" : 1,
									"presentation_rect" : [ 208.673584, 79.597595, 210.989014, 131.102112 ],
									"rounded" : 9
								}

							}
, 							{
								"box" : 								{
									"angle" : -90.0,
									"background" : 1,
									"bgcolor" : [ 0.243442, 0.243442, 0.243442, 1.0 ],
									"border" : 1,
									"bordercolor" : [ 0.698039, 0.698039, 0.698039, 1.0 ],
									"grad1" : [ 0.898039, 0.898039, 0.898039, 1.0 ],
									"grad2" : [ 0.74902, 0.74902, 0.74902, 1.0 ],
									"id" : "obj-350",
									"maxclass" : "panel",
									"mode" : 1,
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 434.063843, 385.699707, 204.469925, 150.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 434.063843, 385.699707, 204.469925, 150.0 ],
									"rounded" : 9
								}

							}
, 							{
								"box" : 								{
									"angle" : -90.0,
									"background" : 1,
									"bgcolor" : [ 0.243442, 0.243442, 0.243442, 1.0 ],
									"border" : 1,
									"bordercolor" : [ 0.698039, 0.698039, 0.698039, 1.0 ],
									"grad1" : [ 0.898039, 0.898039, 0.898039, 1.0 ],
									"grad2" : [ 0.74902, 0.74902, 0.74902, 1.0 ],
									"id" : "obj-335",
									"maxclass" : "panel",
									"mode" : 1,
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 4.368408, 374.301819, 193.158997, 161.397888 ],
									"presentation" : 1,
									"presentation_rect" : [ 4.368408, 374.301819, 193.158997, 161.397888 ],
									"rounded" : 9
								}

							}
, 							{
								"box" : 								{
									"angle" : -90.0,
									"background" : 1,
									"bgcolor" : [ 0.243442, 0.243442, 0.243442, 1.0 ],
									"border" : 1,
									"bordercolor" : [ 0.698039, 0.698039, 0.698039, 1.0 ],
									"grad1" : [ 0.898039, 0.898039, 0.898039, 1.0 ],
									"grad2" : [ 0.74902, 0.74902, 0.74902, 1.0 ],
									"id" : "obj-207",
									"maxclass" : "panel",
									"mode" : 1,
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 4.368408, 241.699707, 193.159058, 123.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 4.368408, 241.699707, 193.159058, 123.0 ],
									"rounded" : 9
								}

							}
, 							{
								"box" : 								{
									"background" : 1,
									"draw_tab_name" : 0,
									"id" : "obj-10",
									"ignoreclick" : 1,
									"maxclass" : "mira.frame",
									"numinlets" : 0,
									"numoutlets" : 0,
									"patching_rect" : [ -0.494507, 74.597595, 656.799683, 466.943525 ],
									"presentation" : 1,
									"presentation_rect" : [ -0.494507, 74.597595, 656.799683, 466.943524 ],
									"tabname" : "Supported UI Objects",
									"taborder" : 2
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"destination" : [ "obj-31", 0 ],
									"disabled" : 0,
									"hidden" : 1,
									"source" : [ "obj-1", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-24", 0 ],
									"disabled" : 0,
									"hidden" : 0,
									"source" : [ "obj-21", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-73", 0 ],
									"disabled" : 0,
									"hidden" : 0,
									"source" : [ "obj-3", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-367", 0 ],
									"disabled" : 0,
									"hidden" : 1,
									"source" : [ "obj-31", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-366", 0 ],
									"disabled" : 0,
									"hidden" : 1,
									"source" : [ "obj-367", 1 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-49", 0 ],
									"disabled" : 0,
									"hidden" : 1,
									"source" : [ "obj-50", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-4", 0 ],
									"disabled" : 0,
									"hidden" : 1,
									"source" : [ "obj-6", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"disabled" : 0,
									"hidden" : 1,
									"source" : [ "obj-76", 0 ]
								}

							}
 ]
					}
,
					"patching_rect" : [ 49.0, 107.0, 136.0, 20.0 ],
					"saved_object_attributes" : 					{
						"default_fontface" : 0,
						"default_fontname" : "Arial",
						"default_fontsize" : 13.0,
						"description" : "",
						"digest" : "",
						"fontface" : 0,
						"fontname" : "Arial",
						"fontsize" : 13.0,
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"text" : "p \"supported ui objects\"",
					"varname" : "basic_tab[1]"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-10",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 20.0, 259.0, 158.0, 20.0 ],
					"saved_object_attributes" : 					{
						"filename" : "helpstarter.js",
						"parameter_enable" : 0
					}
,
					"text" : "js helpstarter.js mira.frame"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-11",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 0,
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 7,
							"minor" : 0,
							"revision" : 0,
							"architecture" : "x64"
						}
,
						"rect" : [ 100.0, 126.0, 684.0, 573.0 ],
						"bglocked" : 0,
						"openinpresentation" : 0,
						"default_fontsize" : 13.0,
						"default_fontface" : 0,
						"default_fontname" : "Arial",
						"gridonopen" : 0,
						"gridsize" : [ 5.0, 5.0 ],
						"gridsnaponopen" : 0,
						"statusbarvisible" : 2,
						"toolbarvisible" : 1,
						"boxanimatetime" : 200,
						"imprint" : 0,
						"enablehscroll" : 1,
						"enablevscroll" : 1,
						"devicewidth" : 0.0,
						"description" : "",
						"digest" : "",
						"tags" : "",
						"showontab" : 1,
						"boxes" : [ 							{
								"box" : 								{
									"bubble" : 1,
									"bubblepoint" : 1.0,
									"bubbletextmargin" : 8,
									"fontname" : "Arial",
									"fontsize" : 13.0,
									"frgb" : 0.0,
									"id" : "obj-20",
									"linecount" : 4,
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 388.0, 435.185638, 181.0, 75.0 ],
									"text" : "Try resizing and dragging this frame around in Max to see how changes are reflected in Mira."
								}

							}
, 							{
								"box" : 								{
									"bordercolor" : [ 0.782276, 0.782276, 0.782276, 1.0 ],
									"candicane2" : [ 0.282353, 0.560784, 0.886275, 1.0 ],
									"candicane3" : [ 0.431373, 0.752941, 0.890196, 1.0 ],
									"candicane4" : [ 0.298039, 0.380392, 0.658824, 1.0 ],
									"candicane5" : [ 0.282353, 0.560784, 0.886275, 1.0 ],
									"candycane" : 5,
									"id" : "obj-198",
									"maxclass" : "multislider",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 140.182617, 274.0, 232.099976, 174.869324 ],
									"presentation" : 1,
									"presentation_rect" : [ 140.182617, 274.0, 232.099976, 174.869324 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "multislider[8]",
											"parameter_shortname" : "multislider",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"setstyle" : 1,
									"signed" : 1,
									"size" : 10,
									"slidercolor" : [ 0.296272, 0.381798, 0.659316, 1.0 ],
									"varname" : "multislider[2]"
								}

							}
, 							{
								"box" : 								{
									"bubble" : 1,
									"bubblepoint" : 1.0,
									"bubbleside" : 2,
									"fontname" : "Arial",
									"fontsize" : 13.0,
									"frgb" : 0.0,
									"hidden" : 1,
									"id" : "obj-41",
									"linecount" : 2,
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 20.434662, 618.0, 145.0, 55.0 ],
									"text" : "Just putting some data in our UI objects."
								}

							}
, 							{
								"box" : 								{
									"bubble" : 1,
									"bubblepoint" : 0.0,
									"bubbleside" : 2,
									"fontname" : "Arial",
									"fontsize" : 13.0,
									"frgb" : 0.0,
									"hidden" : 1,
									"id" : "obj-39",
									"linecount" : 2,
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 365.082642, 601.0, 121.0, 55.0 ],
									"text" : "Waits a second after loading..."
								}

							}
, 							{
								"box" : 								{
									"bubble" : 1,
									"bubblepoint" : 0.54,
									"fontname" : "Arial",
									"fontsize" : 13.0,
									"frgb" : 0.0,
									"hidden" : 1,
									"id" : "obj-35",
									"linecount" : 3,
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 453.5, 658.5, 136.0, 54.0 ],
									"text" : "...then sends  the Basic tab to the front in Mira."
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 12.0,
									"frgb" : 0.0,
									"id" : "obj-19",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 551.0, 30.414856, 87.0, 20.0 ],
									"text" : "App Store",
									"textcolor" : [ 0.282353, 0.560784, 0.886275, 1.0 ],
									"underline" : 1
								}

							}
, 							{
								"box" : 								{
									"handoff" : "",
									"id" : "obj-21",
									"maxclass" : "ubutton",
									"numinlets" : 1,
									"numoutlets" : 4,
									"outlettype" : [ "bang", "bang", "", "int" ],
									"patching_rect" : [ 485.0, 10.0, 154.0, 47.829712 ]
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 12.0,
									"frgb" : 0.0,
									"id" : "obj-22",
									"linecount" : 2,
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 491.0, 18.414856, 147.0, 33.0 ],
									"text" : "Get the latest version of Mira in the"
								}

							}
, 							{
								"box" : 								{
									"bgcolor" : [ 0.994927, 0.989975, 0.9901, 1.0 ],
									"border" : 2,
									"bordercolor" : [ 0.283266, 0.559256, 0.886502, 1.0 ],
									"id" : "obj-23",
									"maxclass" : "panel",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 485.0, 10.0, 154.0, 47.829712 ]
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 12.0,
									"hidden" : 1,
									"id" : "obj-24",
									"linecount" : 3,
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 485.0, 10.0, 392.0, 45.0 ],
									"text" : ";\rmax launchbrowser https://itunes.apple.com/us/app/mira-controller/id649586480?ls=1&mt=8"
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 13.0,
									"hidden" : 1,
									"id" : "obj-15",
									"maxclass" : "newobj",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "bang" ],
									"patching_rect" : [ 287.5, 646.0, 74.0, 21.0 ],
									"text" : "delay 2000"
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 13.0,
									"hidden" : 1,
									"id" : "obj-18",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "" ],
									"patching_rect" : [ 287.5, 703.0, 74.0, 21.0 ],
									"save" : [ "#N", "thispatcher", ";", "#Q", "end", ";" ],
									"text" : "thispatcher"
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 13.0,
									"hidden" : 1,
									"id" : "obj-17",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 287.5, 676.0, 156.0, 19.0 ],
									"text" : "script send __basic focus"
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 13.0,
									"hidden" : 1,
									"id" : "obj-13",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "bang" ],
									"patching_rect" : [ 287.5, 618.0, 64.0, 21.0 ],
									"text" : "loadbang"
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 13.0,
									"hidden" : 1,
									"id" : "obj-9",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 169.534637, 618.0, 77.0, 21.0 ],
									"text" : "loadmess 1"
								}

							}
, 							{
								"box" : 								{
									"hidden" : 1,
									"id" : "obj-8",
									"maxclass" : "preset",
									"numinlets" : 1,
									"numoutlets" : 4,
									"outlettype" : [ "preset", "int", "preset", "int" ],
									"patching_rect" : [ 169.534637, 648.0, 100.0, 40.0 ],
									"preset_data" : [ 										{
											"number" : 1,
											"data" : [ 5, "<invalid>", "slider", "float", 66.0, 5, "<invalid>", "slider", "float", 108.0, 5, "<invalid>", "dial", "float", 92.0, 5, "<invalid>", "dial", "float", 0.0, 5, "<invalid>", "dial", "float", 0.0, 5, "<invalid>", "dial", "float", 29.0, 5, "<invalid>", "toggle", "int", 0, 5, "<invalid>", "toggle", "int", 0, 5, "<invalid>", "toggle", "int", 1, 5, "<invalid>", "toggle", "int", 0, 5, "<invalid>", "toggle", "int", 1, 5, "obj-26", "slider", "float", 97.0, 5, "obj-32", "toggle", "int", 1, 5, "obj-31", "toggle", "int", 1, 5, "obj-30", "toggle", "int", 0, 5, "obj-29", "toggle", "int", 1, 5, "obj-28", "toggle", "int", 0, 5, "obj-33", "slider", "float", 38.0, 5, "obj-34", "dial", "float", 0.0, 5, "obj-36", "dial", "float", 60.0, 5, "obj-37", "dial", "float", 0.0, 5, "obj-38", "dial", "float", 33.0, 14, "obj-198", "multislider", "list", 1.0, 0.735849, 0.459119, 0.257862, 0.069182, -0.144654, -0.383648, -0.484277, -0.710692, -1.0, 14, "<invalid>", "multislider", "list", -0.192982, -0.385965, -0.614035, -0.403509, -0.157895, 0.175439, 0.491228, 0.614035, 0.578947, 0.298246 ]
										}
 ]
								}

							}
, 							{
								"box" : 								{
									"bubble" : 1,
									"bubblepoint" : 0.06,
									"bubbleside" : 2,
									"bubbletextmargin" : 8,
									"fontname" : "Arial",
									"fontsize" : 13.0,
									"frgb" : 0.0,
									"id" : "obj-42",
									"linecount" : 5,
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 10.0, 136.0, 204.0, 104.0 ],
									"text" : "When Mira and Max are on the same network, they'll connect automatically, and  this indicator will turn green. A grey square  means no connection."
								}

							}
, 							{
								"box" : 								{
									"bubble" : 1,
									"bubblepoint" : 0.06,
									"bubbleside" : 2,
									"bubbletextmargin" : 8,
									"fontname" : "Arial",
									"fontsize" : 13.0,
									"frgb" : 0.0,
									"id" : "obj-40",
									"linecount" : 5,
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 217.047974, 136.0, 170.11731, 104.0 ],
									"text" : "Set options like background color, tab name, and other properties in the inspector for the mira.frame object"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-38",
									"maxclass" : "dial",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "float" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 79.182617, 448.750977, 47.869331, 47.869331 ],
									"presentation" : 1,
									"presentation_rect" : [ 79.182617, 448.750977, 47.869331, 47.869331 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "dial[8]",
											"parameter_shortname" : "dial",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "dial[7]"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-37",
									"maxclass" : "dial",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "float" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 79.182617, 388.0, 47.869331, 47.869331 ],
									"presentation" : 1,
									"presentation_rect" : [ 79.182617, 388.0, 47.869331, 47.869331 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "dial[7]",
											"parameter_shortname" : "dial",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "dial[6]"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-36",
									"maxclass" : "dial",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "float" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 79.182617, 330.565338, 47.869331, 47.869331 ],
									"presentation" : 1,
									"presentation_rect" : [ 79.182617, 330.565338, 47.869331, 47.869331 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "dial[6]",
											"parameter_shortname" : "dial",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "dial[5]"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-34",
									"maxclass" : "dial",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "float" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 79.182617, 274.0, 47.869331, 47.869331 ],
									"presentation" : 1,
									"presentation_rect" : [ 79.182617, 274.0, 47.869331, 47.869331 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "dial[5]",
											"parameter_shortname" : "dial",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "dial[4]"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-33",
									"maxclass" : "slider",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 20.682617, 388.0, 50.0, 106.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 20.682617, 388.0, 50.0, 106.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "slider[5]",
											"parameter_shortname" : "slider",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "slider[2]"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-28",
									"maxclass" : "toggle",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 188.282593, 458.750977, 37.0, 37.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 188.282593, 458.750977, 37.0, 37.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "toggle[8]",
											"parameter_shortname" : "toggle",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "toggle[5]"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-29",
									"maxclass" : "toggle",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 335.282593, 458.750977, 37.0, 37.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 335.282593, 458.750977, 37.0, 37.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "toggle[9]",
											"parameter_shortname" : "toggle",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "toggle[6]"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-30",
									"maxclass" : "toggle",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 287.182617, 458.750977, 37.0, 37.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 287.182617, 458.750977, 37.0, 37.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "toggle[10]",
											"parameter_shortname" : "toggle",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "toggle[7]"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-31",
									"maxclass" : "toggle",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 237.232605, 458.750977, 37.0, 37.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 237.232605, 458.750977, 37.0, 37.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "toggle[11]",
											"parameter_shortname" : "toggle",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "toggle[8]"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-32",
									"maxclass" : "toggle",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "int" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 140.182617, 458.750977, 37.0, 37.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 140.182617, 458.750977, 37.0, 37.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "toggle[12]",
											"parameter_shortname" : "toggle",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "toggle[9]"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-26",
									"maxclass" : "slider",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"parameter_enable" : 1,
									"patching_rect" : [ 20.682617, 274.0, 50.0, 106.0 ],
									"presentation" : 1,
									"presentation_rect" : [ 20.682617, 274.0, 50.0, 106.0 ],
									"saved_attribute_attributes" : 									{
										"valueof" : 										{
											"parameter_longname" : "slider[4]",
											"parameter_shortname" : "slider",
											"parameter_type" : 3,
											"parameter_invisible" : 1
										}

									}
,
									"varname" : "slider[3]"
								}

							}
, 							{
								"box" : 								{
									"border" : 0,
									"filename" : "helpdetails.js",
									"id" : "obj-2",
									"ignoreclick" : 1,
									"jsarguments" : [ "mira.frame" ],
									"maxclass" : "jsui",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 10.0, 10.0, 555.0, 120.0 ]
								}

							}
, 							{
								"box" : 								{
									"background" : 1,
									"id" : "obj-27",
									"ignoreclick" : 1,
									"maxclass" : "mira.frame",
									"numinlets" : 0,
									"numoutlets" : 0,
									"patching_rect" : [ 10.0, 249.0, 375.0, 266.601562 ],
									"presentation" : 1,
									"presentation_rect" : [ 10.0, 249.0, 375.0, 266.601562 ],
									"tabname" : "Basic",
									"taborder" : 1,
									"varname" : "__basic"
								}

							}
, 							{
								"box" : 								{
									"background" : 1,
									"bgcolor" : [ 0.950616, 0.950616, 0.950616, 1.0 ],
									"border" : 1,
									"hidden" : 1,
									"id" : "obj-44",
									"maxclass" : "panel",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 9.200012, 591.0, 595.882629, 148.0 ]
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"destination" : [ "obj-15", 0 ],
									"disabled" : 0,
									"hidden" : 1,
									"source" : [ "obj-13", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-17", 0 ],
									"disabled" : 0,
									"hidden" : 1,
									"source" : [ "obj-15", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-18", 0 ],
									"disabled" : 0,
									"hidden" : 1,
									"source" : [ "obj-17", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-24", 0 ],
									"disabled" : 0,
									"hidden" : 0,
									"source" : [ "obj-21", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-8", 0 ],
									"disabled" : 0,
									"hidden" : 1,
									"source" : [ "obj-9", 0 ]
								}

							}
 ]
					}
,
					"patching_rect" : [ 20.0, 79.0, 50.0, 20.0 ],
					"saved_object_attributes" : 					{
						"default_fontface" : 0,
						"default_fontname" : "Arial",
						"default_fontsize" : 13.0,
						"description" : "",
						"digest" : "",
						"fontface" : 0,
						"fontname" : "Arial",
						"fontsize" : 13.0,
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"text" : "p basic",
					"varname" : "basic_tab"
				}

			}
, 			{
				"box" : 				{
					"border" : 0,
					"filename" : "helpname.js",
					"id" : "obj-18",
					"ignoreclick" : 1,
					"jsarguments" : [ "mira.frame" ],
					"maxclass" : "jsui",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 10.0, 10.0, 234.35936, 53.625 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-22",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 0,
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 7,
							"minor" : 0,
							"revision" : 0,
							"architecture" : "x64"
						}
,
						"rect" : [ 0.0, 26.0, 684.0, 573.0 ],
						"bglocked" : 0,
						"openinpresentation" : 0,
						"default_fontsize" : 12.0,
						"default_fontface" : 0,
						"default_fontname" : "Arial",
						"gridonopen" : 0,
						"gridsize" : [ 15.0, 15.0 ],
						"gridsnaponopen" : 0,
						"statusbarvisible" : 2,
						"toolbarvisible" : 1,
						"boxanimatetime" : 200,
						"imprint" : 0,
						"enablehscroll" : 1,
						"enablevscroll" : 1,
						"devicewidth" : 0.0,
						"description" : "",
						"digest" : "",
						"tags" : "",
						"showontab" : 1,
						"boxes" : [  ],
						"lines" : [  ]
					}
,
					"patching_rect" : [ 158.0, 188.0, 50.0, 20.0 ],
					"saved_object_attributes" : 					{
						"default_fontface" : 0,
						"default_fontname" : "Arial",
						"default_fontsize" : 12.0,
						"description" : "",
						"digest" : "",
						"fontface" : 0,
						"fontname" : "Arial",
						"fontsize" : 12.0,
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"text" : "p ?",
					"varname" : "q_tab"
				}

			}
 ],
		"lines" : [  ],
		"parameters" : 		{
			"obj-1::obj-3" : [ "gain~", "gain~", 0 ],
			"obj-1::obj-20" : [ "swatch", "swatch", 0 ],
			"obj-1::obj-214" : [ "slider[10]", "slider[2]", 0 ],
			"obj-1::obj-161" : [ "toggle[20]", "toggle", 0 ],
			"obj-1::obj-333" : [ "live.slider[2]", "live.slider", 0 ],
			"obj-1::obj-8" : [ "live.text", "live.text", 0 ],
			"obj-1::obj-134" : [ "live.button[5]", "live.button", 0 ],
			"obj-1::obj-332" : [ "live.slider[5]", "live.slider", 0 ],
			"obj-2::obj-13" : [ "toggle[23]", "toggle[23]", 0 ],
			"obj-1::obj-79" : [ "kslider[1]", "kslider", 0 ],
			"obj-1::obj-311" : [ "dial[11]", "dial[9]", 0 ],
			"obj-1::obj-80" : [ "live.tab[1]", "live.tab", 0 ],
			"obj-1::obj-163" : [ "toggle[21]", "toggle", 0 ],
			"obj-1::obj-198" : [ "multislider[6]", "multislider", 0 ],
			"obj-11::obj-37" : [ "dial[7]", "dial", 0 ],
			"obj-1::obj-15" : [ "slider[11]", "slider[2]", 0 ],
			"obj-1::obj-16" : [ "umenu[1]", "umenu[1]", 0 ],
			"obj-1::obj-132" : [ "live.button[4]", "live.button", 0 ],
			"obj-11::obj-31" : [ "toggle[11]", "toggle", 0 ],
			"obj-1::obj-154" : [ "live.toggle[6]", "live.toggle", 0 ],
			"obj-11::obj-36" : [ "dial[6]", "dial", 0 ],
			"obj-1::obj-317" : [ "live.dial[4]", "live.dial", 0 ],
			"obj-1::obj-354" : [ "flonum[2]", "flonum", 0 ],
			"obj-1::obj-226" : [ "dial[9]", "dial[9]", 0 ],
			"obj-1::obj-355" : [ "number[2]", "number", 0 ],
			"obj-2::obj-10" : [ "number", "number", 0 ],
			"obj-1::obj-356" : [ "live.numbox[2]", "live.numbox", 0 ],
			"obj-1::obj-366" : [ "multislider[2]", "multislider[1]", 0 ],
			"obj-1::obj-85" : [ "number[1]", "number", 0 ],
			"obj-2::obj-15" : [ "umenu", "umenu", 0 ],
			"obj-1::obj-210" : [ "slider[6]", "slider[2]", 0 ],
			"obj-1::obj-155" : [ "toggle[17]", "toggle", 0 ],
			"obj-11::obj-29" : [ "toggle[9]", "toggle", 0 ],
			"obj-1::obj-211" : [ "slider[7]", "slider[2]", 0 ],
			"obj-11::obj-38" : [ "dial[8]", "dial", 0 ],
			"obj-1::obj-159" : [ "toggle[19]", "toggle", 0 ],
			"obj-11::obj-26" : [ "slider[4]", "slider", 0 ],
			"obj-1::obj-6" : [ "toggle[2]", "toggle[2]", 0 ],
			"obj-11::obj-33" : [ "slider[5]", "slider", 0 ],
			"obj-2::obj-1" : [ "number[3]", "number", 0 ],
			"obj-1::obj-310" : [ "dial[10]", "dial[9]", 0 ],
			"obj-1::obj-130" : [ "live.button[3]", "live.button", 0 ],
			"obj-1::obj-164" : [ "live.toggle[11]", "live.toggle", 0 ],
			"obj-11::obj-30" : [ "toggle[10]", "toggle", 0 ],
			"obj-1::obj-83" : [ "flonum[1]", "flonum", 0 ],
			"obj-1::obj-165" : [ "toggle[22]", "toggle", 0 ],
			"obj-1::obj-151" : [ "toggle[15]", "toggle", 0 ],
			"obj-1::obj-86" : [ "live.numbox[1]", "live.numbox", 0 ],
			"obj-1::obj-312" : [ "dial[12]", "dial[9]", 0 ],
			"obj-1::obj-316" : [ "live.dial[3]", "live.dial", 0 ],
			"obj-1::obj-13" : [ "live.button[2]", "live.button", 0 ],
			"obj-1::obj-166" : [ "live.toggle[12]", "live.toggle", 0 ],
			"obj-1::obj-227" : [ "live.dial[2]", "live.dial", 0 ],
			"obj-11::obj-198" : [ "multislider[8]", "multislider", 0 ],
			"obj-1::obj-153" : [ "toggle[16]", "toggle", 0 ],
			"obj-11::obj-28" : [ "toggle[8]", "toggle", 0 ],
			"obj-11::obj-32" : [ "toggle[12]", "toggle", 0 ],
			"obj-11::obj-34" : [ "dial[5]", "dial", 0 ],
			"obj-1::obj-318" : [ "live.dial[5]", "live.dial", 0 ],
			"obj-1::obj-77" : [ "rslider[1]", "rslider", 0 ],
			"obj-1::obj-157" : [ "toggle[18]", "toggle", 0 ],
			"obj-1::obj-7" : [ "live.grid", "live.grid", 0 ],
			"obj-1::obj-152" : [ "live.toggle[5]", "live.toggle", 0 ]
		}
,
		"dependency_cache" : [ 			{
				"name" : "helpname.js",
				"bootpath" : "/gitc74/repository/max/maxmsp-misc/help/resources",
				"patcherrelativepath" : "../../../maxmsp-misc/help/resources",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "helpdetails.js",
				"bootpath" : "/gitc74/repository/max/maxmsp-misc/help/resources",
				"patcherrelativepath" : "../../../maxmsp-misc/help/resources",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "helpstarter.js",
				"bootpath" : "/gitc74/repository/max/maxmsp-misc/help/resources",
				"patcherrelativepath" : "../../../maxmsp-misc/help/resources",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "Mira-100px.png",
				"bootpath" : "/gitc74/repository/max/mobile/mira-package/help",
				"patcherrelativepath" : ".",
				"type" : "PNG ",
				"implicit" : 1
			}
 ]
	}

}
