using System;
using System.Collections.Generic;

namespace UnlockedData.NoUiSlider
{
    public class SliderOption
    {
        public List<dynamic> Start { get; set; } = new() {0};
        public dynamic Connect { get; set; } = false;
        public int Step { get; set; }
        public string Orientation { get; set; } = NoUiSlider.Orientation.horizontal.ToString();
        public string Direction { get; set; } = NoUiSlider.Direction.ltr.ToString();
        public string Behaviour { get; set; } = NoUiSlider.Behaviour.tap.ToString();
        public SliderRange Range { get; set; } = new();

        public dynamic ToolTips { get; set; } = false;

        public bool Snap { get; set; } = false;
        public bool Animate { get; set; } = true;
        public int AnimationDuration { get; set; } = 300;
        public int Handle { get; set; }

        public double Margin { get; set; }


        public double Padding { get; set; }

        public static SliderOption CreateDateOption(DateTime start, DateTime min, DateTime max)
        {
            return new()
            {
                Start = new List<dynamic> {start.Ticks},
                Range = new SliderRange {Min = new List<dynamic> {min.Ticks}, Max = new List<dynamic> {max.Ticks}},
                Step = 7 * 24 * 60 * 60 * 1000
            };
        }
    }

    public class SliderRange
    {
        public List<dynamic> Min { get; set; } = new() {0};
        public List<dynamic> Max { get; set; } = new() {1000};
    }
}
