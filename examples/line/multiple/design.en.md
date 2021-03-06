---
title: 设计规范
---

## 何时使用

折线图用于显示数据在一个连续的时间间隔或者时间跨度上的变化，它的特点是反映事物随时间或有序类别而变化的趋势。

## 数据类型

| 适合的数据       | 「两个连续字段数据」，或者「一个有序的分类」+「一个连续数据字段」 |
| ---------------- | ----------------------------------------------------------------- |
| 功能             | 观察数据的变化趋势                                                |
| 数据与图形的映射 | 两个连续字段分别映射到横轴和纵轴                                  |
| 适合的数据条数   | 大于两条                                                          |

## 用法建议

<img alt="design" src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*yGeASraSozQAAAAAAAAAAABkARQnAQ" width="1000">

## 元素

<img alt="design" src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*uxv8RJgYx4oAAAAAAAAAAABkARQnAQ" width="800">

- X 轴：通常对应连续数据，值为时间，调用连续数据 X 轴。
- Y 轴：通常对应连续数据，值为数字，调用连续数据 Y 轴。
- 图例：通常出现在多条折线图中，用来区分不同折线代表的数据含义。
- 标签：用来解释数据点的值。
- 辅助元素：用来解释某个特殊的数据点的值，或标记出某个特殊含义的区域。
