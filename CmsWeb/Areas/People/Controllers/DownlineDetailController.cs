﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CmsData;
using CmsWeb.Areas.People.Models;

namespace CmsWeb.Areas.People.Controllers
{
    [RouteArea("People", AreaPrefix = "DownlineDetail")]
    public class DownlineDetailController : CmsStaffController
    {
        [HttpGet, Route("~/DownlineDetail/{category}/{peopleid:int}/{level:int}")]
        public ActionResult Index(int category, int peopleid, int level)
        {
            var m = new DownlineDetailModel
            {
                CategoryId = category,
                DownlineId = peopleid,
                Level = level
            };
            return View(m);
        }
        [HttpPost, Route("~/DownlineDetail/Results")]
        public ActionResult Results(DownlineDetailModel m)
        {
            return View(m);
        }

        [HttpGet, Route("~/DownlineTrace/{category}/{peopleid}")]
        public ActionResult Trace(int category, int peopleid, string trace)
        {
            var m = new DownlineDetailModel
            {
                CategoryId = category,
                DownlineId = peopleid,
                Trace = trace
            };
            return View(m);
        }
    }
}