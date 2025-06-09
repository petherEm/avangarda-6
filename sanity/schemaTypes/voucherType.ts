import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'voucher',
  title: 'Vouchers',
  type: 'document',
  fields: [
    defineField({
      name: 'plname',
      title: 'Polish Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'enname',
      title: 'English Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'plname',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'voucherImage',
      title: 'Voucher Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'voucherValue',
      title: 'Voucher Value',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'pldescription',
      title: 'Polish Description',
      type: 'text',
    }),
    defineField({
      name: 'endescription',
      title: 'English Description',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'plname',
      subtitle: 'voucherValue',
      media: 'voucherImage',
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        ...selection,
        subtitle: subtitle ? `Value: ${subtitle}` : '',
      };
    },
  },
});